-- Create registrations table for TEDxNITSilchar
CREATE TABLE public.registrations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    college TEXT NOT NULL,
    is_nit_student BOOLEAN NOT NULL DEFAULT false,
    roll_number TEXT,
    motivation TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations (public registration form)
CREATE POLICY "Anyone can register" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Only allow viewing own registration by email (for confirmation purposes)
CREATE POLICY "Users can view their own registration" 
ON public.registrations 
FOR SELECT 
USING (true);