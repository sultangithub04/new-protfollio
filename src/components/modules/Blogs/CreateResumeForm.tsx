"use client";

import { createResume } from "@/action/createResume";
import Form from "next/form";

export default function CreateResumeForm() {
  return (
    <Form
      action={createResume}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Create Resume</h2>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-medium mb-2">Contact Info</h3>
        <input
          type="text"
          name="contactInfo[fullName]"
          placeholder="Full Name"
          required
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="email"
          name="contactInfo[email]"
          placeholder="Email"
          required
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="text"
          name="contactInfo[phone]"
          placeholder="Phone"
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="text"
          name="contactInfo[address]"
          placeholder="Address"
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="url"
          name="contactInfo[linkedin]"
          placeholder="LinkedIn Profile"
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="url"
          name="contactInfo[github]"
          placeholder="GitHub Profile"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Work Experience */}
      <div>
        <h3 className="text-lg font-medium mb-2">Work Experience</h3>

        {/* First Experience */}
        <div className="mb-4">
          <input
            type="text"
            name="workExperience[0][company]"
            placeholder="Company"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="text"
            name="workExperience[0][position]"
            placeholder="Position"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="date"
            name="workExperience[0][startDate]"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="date"
            name="workExperience[0][endDate]"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <textarea
            name="workExperience[0][responsibilities]"
            placeholder="Responsibilities (comma separated)"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Second Experience */}
        <div>
          <input
            type="text"
            name="workExperience[1][company]"
            placeholder="Company"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="text"
            name="workExperience[1][position]"
            placeholder="Position"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="date"
            name="workExperience[1][startDate]"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="date"
            name="workExperience[1][endDate]"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <textarea
            name="workExperience[1][responsibilities]"
            placeholder="Responsibilities (comma separated)"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-lg font-medium mb-2">Education</h3>
        <input
          type="text"
          name="education[0][institution]"
          placeholder="Institution"
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="text"
          name="education[0][degree]"
          placeholder="Degree"
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="date"
          name="education[0][startDate]"
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <input
          type="date"
          name="education[0][endDate]"
          className="w-full rounded-md border px-3 py-2 mb-2"
        />
        <textarea
          name="education[0][details]"
          placeholder="Details"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-medium mb-1">Skills</label>
        <input
          type="text"
          name="skills"
          placeholder="Comma separated (JavaScript, Node.js, Prisma)"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-medium mb-2">Certifications</h3>
        <div className="mb-4">
          <input
            type="text"
            name="certifications[0][name]"
            placeholder="Certification Name"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="text"
            name="certifications[0][issuer]"
            placeholder="Issuer"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="date"
            name="certifications[0][date]"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
        <div>
          <input
            type="text"
            name="certifications[1][name]"
            placeholder="Certification Name"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="text"
            name="certifications[1][issuer]"
            placeholder="Issuer"
            className="w-full rounded-md border px-3 py-2 mb-2"
          />
          <input
            type="date"
            name="certifications[1][date]"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </Form>
  );
}
