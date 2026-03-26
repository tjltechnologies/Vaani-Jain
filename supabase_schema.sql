-- Run these commands in your Supabase SQL Editor

-- 1. Profile Table
CREATE TABLE public.profile (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  subtitle text NOT NULL,
  about_text text NOT NULL,
  age integer NOT NULL,
  location text NOT NULL,
  hobbies_text text NOT NULL,
  avatar_url text
);

-- 2. Skills Table
CREATE TABLE public.skills (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  subtitle text,
  type text NOT NULL, -- expects 'badge pink', 'ribbon teal', 'arch green', 'starburst yellow', 'pill purple', 'rectangle red'
  order_index integer DEFAULT 0
);

-- 3. Gallery Items Table
CREATE TABLE public.gallery_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  category text NOT NULL,
  image_url text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Initial default data
INSERT INTO public.profile (name, subtitle, about_text, age, location, hobbies_text, avatar_url)
VALUES (
  'VA❤NI JAIN', 
  'ARTIST & CODER', 
  'Hi! I am 8 years old and I love learning new things. I specialize in trying my best at all my hobbies! Welcome to my portfolio where I share my skills and fun projects.',
  8,
  'Earth',
  'Lots of Hobbies!',
  'https://picsum.photos/seed/vaani/400/400'
);

INSERT INTO public.skills (name, subtitle, type, order_index) VALUES
('Bharatnatyam', '(lvl 3)', 'ribbon teal', 1),
('Artist', null, 'badge pink', 2),
('Programming', 'SCRATCH', 'arch green', 3),
('Karate', 'sky blue belt', 'starburst yellow', 4),
('Crafts & Arts', null, 'pill purple', 5),
('Reading Books', null, 'rectangle red', 6);

-- 5. Creating a storage bucket manually is recommended in dashboard, but this attempts creation:
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio_images', 'portfolio_images', true) ON CONFLICT DO NOTHING;

-- 6. RLS Policies
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read profile" ON public.profile FOR SELECT USING (true);
CREATE POLICY "Allow public read skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Allow public read gallery_items" ON public.gallery_items FOR SELECT USING (true);
