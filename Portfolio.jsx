
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Sai Nikhil Pothuraju</h1>
      <p className="text-lg mb-4">Java Full Stack Developer | 7+ Years Experience | Cloud-Native Microservices | AWS | React | Spring Boot | Kubernetes</p>
      <div className="flex gap-4 mb-6">
        <Button variant="outline">
          <a href="mailto:sainikhilpothuraju22@gmail.com" target="_blank"><Mail className="mr-2" /> Email</a>
        </Button>
        <Button variant="outline">
          <a href="https://www.linkedin.com/in/sai-nikhil-pothuraju-he-him-5399111a9" target="_blank"><Linkedin className="mr-2" /> LinkedIn</a>
        </Button>
        <Button variant="outline">
          <a href="https://github.com/" target="_blank"><Github className="mr-2" /> GitHub</a>
        </Button>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <Card>
          <CardContent className="p-4">
            <p>
              Experienced Java Full Stack Developer with 7+ years of expertise in designing and developing enterprise apps using Angular, React, Spring Boot, Hibernate, and Microservices. Proficient in AWS, Docker, Kubernetes, CI/CD, and agile environments. Holds Master’s in Computer Science from Eastern Illinois University.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <Card>
          <CardContent className="p-4">
            <ul className="list-disc pl-5">
              <li>Frontend: Angular, React, Vue.js, Bootstrap</li>
              <li>Backend: Java, Spring Boot, Hibernate, Microservices</li>
              <li>Databases: MySQL, Oracle, MongoDB, Cassandra</li>
              <li>Cloud: AWS (EC2, Lambda, S3), Azure, GCP</li>
              <li>Tools: Git, Jenkins, Docker, Kubernetes, JIRA, Postman, JMeter</li>
              <li>Testing: JUnit, Mockito, Selenium</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Card>
          <CardContent className="p-4">
            <ul className="space-y-4">
              <li>
                <strong>BDO USA</strong> — Java Full Stack Developer (Aug 2024 - Present)
                <br /> Chicago, IL, USA
              </li>
              <li>
                <strong>Kellogg Company</strong> — Java Full Stack Developer (Dec 2023 - Jul 2024)
                <br /> Chicago, IL, USA
              </li>
              <li>
                <strong>QualiZeal</strong> — Java Full Stack Developer (Oct 2021 - Aug 2023)
                <br /> Hyderabad, India
              </li>
              <li>
                <strong>Stag Innovations Pvt Ltd</strong> — Java Full Stack Developer (Jul 2019 - Sep 2021)
                <br /> Hyderabad, India
              </li>
              <li>
                <strong>Tanla Platforms Ltd</strong> — Java Developer (Jun 2017 - Jun 2019)
                <br /> Hyderabad, India
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <Card>
          <CardContent className="p-4">
            <p>
              <strong>Eastern Illinois University</strong> — Master’s in Computer Technology (2023 - 2025)<br />
              Charleston, Illinois, USA
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
