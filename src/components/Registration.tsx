import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number too long"),
  college: z.string().min(2, "College name required").max(200, "College name too long"),
  isNitStudent: z.string(),
  rollNumber: z.string().optional(),
  motivation: z.string().max(1000, "Response too long").optional(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      isNitStudent: "no",
    },
  });

  const isNitStudent = watch("isNitStudent");

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("registrations").insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        college: data.college,
        is_nit_student: data.isNitStudent === "yes",
        roll_number: data.isNitStudent === "yes" ? data.rollNumber : null,
        motivation: data.motivation || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      reset();
      toast({
        title: "Registration Successful!",
        description: "We'll be in touch with more details soon.",
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 md:py-32 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                You're Registered!
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Thank you for registering for TEDxNITSilchar 2026. We're thrilled to have 
                you join us on this journey of turning lessons into legacies.
              </p>
              <p className="text-muted-foreground">
                Keep an eye on your inbox for updates and event details.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-8"
              >
                Register Another Person
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Register </span>
              <span className="text-primary">Now</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Secure your spot at TEDxNITSilchar 2026. Be part of an unforgettable 
              experience of ideas worth spreading.
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  {...register("fullName")}
                  className="bg-secondary border-border"
                />
                {errors.fullName && (
                  <p className="text-destructive text-sm">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="bg-secondary border-border"
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  {...register("phone")}
                  className="bg-secondary border-border"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* College */}
              <div className="space-y-2">
                <Label htmlFor="college">College/Institution *</Label>
                <Input
                  id="college"
                  placeholder="Enter your college name"
                  {...register("college")}
                  className="bg-secondary border-border"
                />
                {errors.college && (
                  <p className="text-destructive text-sm">{errors.college.message}</p>
                )}
              </div>

              {/* NIT Silchar Student */}
              <div className="space-y-2">
                <Label>Are you a NIT Silchar student? *</Label>
                <Select
                  value={isNitStudent}
                  onValueChange={(value) => setValue("isNitStudent", value)}
                >
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Roll Number (conditional) */}
              {isNitStudent === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  <Input
                    id="rollNumber"
                    placeholder="Enter your roll number"
                    {...register("rollNumber")}
                    className="bg-secondary border-border"
                  />
                </div>
              )}

              {/* Motivation */}
              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to attend? (Optional)</Label>
                <Textarea
                  id="motivation"
                  placeholder="Tell us what excites you about TEDxNITSilchar..."
                  {...register("motivation")}
                  className="bg-secondary border-border min-h-[100px]"
                />
                {errors.motivation && (
                  <p className="text-destructive text-sm">{errors.motivation.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg uppercase tracking-wide py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Register
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Event Details Reminder */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              <span className="text-primary font-semibold">February 8, 2026</span> • 9:00 AM - 6:00 PM
              <br />
              Auditorium, NIT Silchar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
