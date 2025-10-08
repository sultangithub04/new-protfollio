/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";

type ResumeProps = { data: any };

export default function ResumeView({ data }: ResumeProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (typeof window === "undefined") return;
    if (!resumeRef.current) return;

    const html2pdf = (await import("html2pdf.js")).default;

    const element = resumeRef.current;
    const opt = {
      margin: 0.5,
      filename: `${data.contactInfo.fullName}-Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt as any).save();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      {/* Download Button */}
      <div className="flex justify-end mb-4 mt-8">
        <Button onClick={handleDownload}>Download Resume</Button>
      </div>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        className="bg-white p-6 shadow-md rounded-lg space-y-6 w-full"
        style={{ width: "100%" }}
      >
        {/* Contact Info */}
        <section>
          <h1 className="text-2xl font-bold">{data.contactInfo.fullName}</h1>
          <p>{data.contactInfo.email}</p>
          <p>{data.contactInfo.phone}</p>
          <p>{data.contactInfo.address}</p>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-semibold">Work Experience</h2>
          {data.workExperience.map((job: any, idx: number) => (
            <div key={idx} className="mb-2">
              <h3 className="font-medium">
                {job.position} – {job.company}
              </h3>
              <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
                {job.startDate} – {job.endDate}
              </p>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((r: string, i: number) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold">Education</h2>
          {data.education.map((edu: any, idx: number) => (
            <div key={idx} className="mb-2">
              <h3 className="font-medium">{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
                {edu.startDate} – {edu.endDate}
              </p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <br />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {data.skills.map((skill: string, idx: number) => (
              <span
                key={idx}
                style={{
                  backgroundColor: "#E5E7EB", // instead of bg-gray-200
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "0.9rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-semibold">Certifications</h2>
          {data.certifications.map((cert: any, idx: number) => (
            <div key={idx}>
              <p className="font-medium">{cert.name}</p>
              <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
                {cert.issuer} – {cert.date}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
