import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Upload,
  CheckCircle,
  Globe,
  School,
} from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [studyMode, setStudyMode] = useState<string>("");
  const [programLevel, setProgramLevel] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and contact you within 3-5 business days.",
    });
  };

  const ugandanDistricts = [
    "Kampala",
    "Wakiso",
    "Mukono",
    "Entebbe",
    "Jinja",
    "Mbarara",
    "Gulu",
    "Lira",
    "Masaka",
    "Mbale",
    "Kasese",
    "Fort Portal",
    "Arua",
    "Soroti",
    "Hoima",
    "Kabale",
    "Other",
  ];

  const programs = {
    undergraduate: [
      "Bachelor of Business Administration",
      "Bachelor of Commerce",
      "Bachelor of Accounting & Finance",
      "Bachelor of Marketing",
      "Bachelor of Entrepreneurship",
      "Bachelor of Supply Chain Management",
    ],
    masters: [
      "Master of Business Administration (MBA)",
      "Master of Project Management",
      "Master of Finance",
      "Master of Human Resource Management",
      "Master of Strategic Management",
    ],
    professional: [
      "CPA Uganda",
      "ACCA",
      "Digital Marketing Certificate",
      "Project Management Professional (PMP)",
      "HR Management Certificate",
    ],
    vocational: [
      "Business Management Diploma",
      "Office Administration Certificate",
      "Entrepreneurship Certificate",
      "Computer Applications Diploma",
    ],
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-0">
            <GraduationCap className="h-4 w-4 mr-2" />
            Start Your Journey
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Apply Now</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Join Peakpoint Business School - Uganda's Premier Business Education Institution
          </p>
        </div>
      </section>

      {/* Study Mode Options */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Study Mode</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-secondary transition-smooth cursor-pointer">
                <CardContent className="pt-6">
                  <School className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">On-Campus Learning</h3>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Face-to-face classes at our Kampala campus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Access to physical library and facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Campus events and networking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Direct interaction with lecturers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-smooth cursor-pointer">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Online Learning</h3>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Study from anywhere in Uganda or abroad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Flexible schedule - recorded & live sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Digital library and resources 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Same accredited degree as on-campus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Application Form</CardTitle>
                <CardDescription className="text-base">
                  Fill in all required fields. Application fee: UGX 50,000 (non-refundable)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Study Mode Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">
                      Preferred Study Mode <span className="text-destructive">*</span>
                    </Label>
                    <RadioGroup value={studyMode} onValueChange={setStudyMode} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 border-2 rounded-lg p-4 cursor-pointer hover:border-secondary transition-smooth">
                        <RadioGroupItem value="on-campus" id="on-campus" />
                        <Label htmlFor="on-campus" className="cursor-pointer flex-1">
                          <School className="h-4 w-4 inline mr-2" />
                          On-Campus
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border-2 rounded-lg p-4 cursor-pointer hover:border-secondary transition-smooth">
                        <RadioGroupItem value="online" id="online" />
                        <Label htmlFor="online" className="cursor-pointer flex-1">
                          <Globe className="h-4 w-4 inline mr-2" />
                          Online Learning
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Program Level */}
                  <div className="space-y-3">
                    <Label htmlFor="program-level" className="text-base font-semibold">
                      Program Level <span className="text-destructive">*</span>
                    </Label>
                    <Select value={programLevel} onValueChange={setProgramLevel}>
                      <SelectTrigger id="program-level">
                        <SelectValue placeholder="Select program level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="masters">Masters</SelectItem>
                        <SelectItem value="professional">Professional Courses</SelectItem>
                        <SelectItem value="vocational">Vocational & Short Courses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Program Selection */}
                  {programLevel && (
                    <div className="space-y-3">
                      <Label htmlFor="program" className="text-base font-semibold">
                        Select Program <span className="text-destructive">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="program">
                          <SelectValue placeholder="Choose your program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs[programLevel as keyof typeof programs]?.map((program) => (
                            <SelectItem key={program} value={program}>
                              {program}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Personal Information */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Mail className="h-5 w-5 text-secondary" />
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input id="first-name" required placeholder="Enter first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input id="last-name" required placeholder="Enter last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input id="email" type="email" required placeholder="example@email.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            className="w-20"
                            value="+256"
                            disabled
                          />
                          <Input
                            id="phone"
                            required
                            placeholder="700 123 456"
                            pattern="[0-9]{9}"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">Format: +256 700 123 456</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <div className="flex gap-2">
                          <Input
                            className="w-20"
                            value="+256"
                            disabled
                          />
                          <Input
                            id="whatsapp"
                            placeholder="700 123 456"
                            pattern="[0-9]{9}"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dob">
                          Date of Birth <span className="text-destructive">*</span>
                        </Label>
                        <Input id="dob" type="date" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">
                          Gender <span className="text-destructive">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality">
                        Nationality <span className="text-destructive">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="nationality">
                          <SelectValue placeholder="Select nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ugandan">Ugandan</SelectItem>
                          <SelectItem value="kenyan">Kenyan</SelectItem>
                          <SelectItem value="tanzanian">Tanzanian</SelectItem>
                          <SelectItem value="rwandan">Rwandan</SelectItem>
                          <SelectItem value="south-sudanese">South Sudanese</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-secondary" />
                      Address Information
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="district">
                        District/City <span className="text-destructive">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="district">
                          <SelectValue placeholder="Select your district" />
                        </SelectTrigger>
                        <SelectContent>
                          {ugandanDistricts.map((district) => (
                            <SelectItem key={district} value={district.toLowerCase()}>
                              {district}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">
                        Physical Address <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="address"
                        required
                        placeholder="Enter your full address (Village/Zone, Parish, Sub-county)"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Academic Background */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-secondary" />
                      Academic Background
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="previous-school">
                        Previous School/Institution <span className="text-destructive">*</span>
                      </Label>
                      <Input id="previous-school" required placeholder="Name of school or university" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="qualification">
                          Highest Qualification <span className="text-destructive">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger id="qualification">
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="olevel">O-Level (UCE)</SelectItem>
                            <SelectItem value="alevel">A-Level (UACE)</SelectItem>
                            <SelectItem value="certificate">Certificate</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                            <SelectItem value="masters">Master's Degree</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="graduation-year">
                          Year of Completion <span className="text-destructive">*</span>
                        </Label>
                        <Input id="graduation-year" type="number" required placeholder="2020" min="1970" max="2025" />
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Upload className="h-5 w-5 text-secondary" />
                      Required Documents
                    </h3>

                    <div className="space-y-4 border-2 border-dashed rounded-lg p-6">
                      <div className="space-y-2">
                        <Label htmlFor="transcript">
                          Academic Transcripts <span className="text-destructive">*</span>
                        </Label>
                        <Input id="transcript" type="file" accept=".pdf,.jpg,.png" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="id-document">
                          National ID or Passport <span className="text-destructive">*</span>
                        </Label>
                        <Input id="id-document" type="file" accept=".pdf,.jpg,.png" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="passport-photo">
                          Passport Photo <span className="text-destructive">*</span>
                        </Label>
                        <Input id="passport-photo" type="file" accept=".jpg,.png" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recommendation">Recommendation Letter (Optional)</Label>
                        <Input id="recommendation" type="file" accept=".pdf" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Maximum file size: 5MB per document. Accepted formats: PDF, JPG, PNG
                    </p>
                  </div>

                  {/* Personal Statement */}
                  <div className="space-y-2">
                    <Label htmlFor="statement">
                      Personal Statement <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="statement"
                      required
                      placeholder="Tell us why you want to join Peakpoint Business School and your career goals (minimum 100 words)"
                      rows={6}
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm cursor-pointer">
                        I confirm that all information provided is accurate and complete. I understand that the
                        application fee of UGX 50,000 is non-refundable. <span className="text-destructive">*</span>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm cursor-pointer">
                        I agree to receive updates and information about Peakpoint Business School via email and SMS
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      After submission, you will receive payment instructions via email to complete your application
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Contact our admissions team for assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">+256 700 123 456</p>
                      <p className="text-sm text-muted-foreground">+256 772 987 654</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">admissions@peakpoint.ac.ug</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Office Hours</p>
                      <p className="text-sm text-muted-foreground">Mon - Fri: 8AM - 5PM</p>
                      <p className="text-sm text-muted-foreground">Sat: 9AM - 1PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
