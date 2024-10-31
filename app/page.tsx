import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Calendar, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex-1 pt-24 pb-16">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8 py-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Elevate Your Academic Performance
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Connect with qualified tutors for personalized extra classes in matric subjects.
              Learn at your own pace and achieve your academic goals.
            </p>
            <div className="flex gap-4">
              <Link href="/auth/register?role=student">
                <Button size="lg">Find a Tutor</Button>
              </Link>
              <Link href="/auth/register?role=tutor">
                <Button size="lg" variant="outline">Become a Tutor</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Extra Classes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10" />}
              title="Expert Tutors"
              description="Learn from qualified and experienced tutors who are passionate about teaching."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Personalized Learning"
              description="Get individual attention and customized learning plans tailored to your needs."
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10" />}
              title="Flexible Schedule"
              description="Choose class times that work best for you with our flexible scheduling system."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10" />}
              title="Track Progress"
              description="Monitor your improvement with detailed progress tracking and feedback."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 flex flex-col items-center text-center space-y-4">
      <div className="p-3 bg-primary/10 rounded-full text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}