"use client";

import { useState, type ReactNode } from "react";
import { CalendarDays, ChevronDown, UploadCloud } from "lucide-react";

const inputClass =
  "h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[15px] font-bold text-navy">
        {label}
        {required && <span className="text-orange-mid"> *</span>}
      </span>
      {children}
    </label>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
      <h2 className="text-2xl font-extrabold text-navy">{title}</h2>
      <span className="mt-3 mb-8 block h-1 w-10 rounded-full bg-orange" aria-hidden />
      {children}
    </div>
  );
}

function DateInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <input type="text" placeholder={placeholder} className={inputClass} />
      <CalendarDays
        size={18}
        className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}

function UploadZone({
  label,
  required,
  id,
}: {
  label: string;
  required?: boolean;
  id: string;
}) {
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <div>
      <p className="mb-3 text-[15px] font-bold text-navy">
        {label}
        {required && <span className="text-orange-mid"> *</span>}
      </p>
      <label
        htmlFor={id}
        className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center transition-colors hover:border-orange"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
          <UploadCloud size={22} className="text-orange-mid" />
        </span>
        <span className="mt-4 font-bold text-navy">
          {fileName ?? "Click to upload or drag and drop"}
        </span>
        <span className="mt-1 text-[13px] text-gray-500">
          PDF, DOC, or DOCX (Max. 10MB)
        </span>
        <input
          id={id}
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </label>
    </div>
  );
}

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Card title="Personal Information">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Full Name" required>
            <input
              type="text"
              required
              placeholder="e.g. Ahmed Mohammed"
              className={inputClass}
            />
          </Field>
          <Field label="Email Address" required>
            <input
              type="email"
              required
              placeholder="name@example.com"
              className={inputClass}
            />
          </Field>
          <Field label="Phone Number" required>
            <input
              type="tel"
              required
              placeholder="+249 XXX XXX XXX"
              className={inputClass}
            />
          </Field>
          <Field label="Date of Birth">
            <DateInput placeholder="DD / MM / YYYY" />
          </Field>
          <Field label="Nationality">
            <input type="text" placeholder="e.g. Sudanese" className={inputClass} />
          </Field>
          <Field label="Current Location / City" required>
            <input
              type="text"
              required
              placeholder="e.g. Khartoum"
              className={inputClass}
            />
          </Field>
          <Field label="LinkedIn Profile URL">
            <input
              type="url"
              placeholder="e.g. linkedin.com/in/username"
              className={inputClass}
            />
          </Field>
        </div>
      </Card>

      <Card title="Professional Information">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Position Applying For" required>
            <div className="relative">
              <select
                required
                defaultValue=""
                className={`${inputClass} appearance-none pr-10 invalid:text-gray-400`}
              >
                <option value="" disabled>
                  Select a position
                </option>
                <option>Senior Structural Engineer</option>
                <option>Project Manager – Infrastructure</option>
                <option>QA/QC Inspector</option>
                <option>Other</option>
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
              />
            </div>
          </Field>
          <Field label="Years of Experience" required>
            <input
              type="number"
              required
              min={0}
              placeholder="e.g. 5"
              className={inputClass}
            />
          </Field>
          <Field label="Current Employer">
            <input
              type="text"
              placeholder="Current company name"
              className={inputClass}
            />
          </Field>
          <Field label="Current Job Title">
            <input type="text" placeholder="Your current role" className={inputClass} />
          </Field>
          <Field label="Expected Salary Range">
            <input
              type="text"
              placeholder="e.g. SDG 500,000 - 700,000"
              className={inputClass}
            />
          </Field>
          <Field label="Available Start Date">
            <DateInput placeholder="Select date" />
          </Field>
        </div>
      </Card>

      <Card title="Education">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Highest Degree" required>
            <input
              type="text"
              required
              placeholder="e.g. Master's in Civil Engineering"
              className={inputClass}
            />
          </Field>
          <Field label="University / Institution" required>
            <input
              type="text"
              required
              placeholder="Name of university"
              className={inputClass}
            />
          </Field>
          <Field label="Field of Study" required>
            <input
              type="text"
              required
              placeholder="Major or specialization"
              className={inputClass}
            />
          </Field>
          <Field label="Graduation Year">
            <input type="text" placeholder="YYYY" className={inputClass} />
          </Field>
        </div>
      </Card>

      <Card title="Documents Upload">
        <div className="space-y-8">
          <UploadZone id="cv" label="Upload CV / Resume" required />
          <UploadZone id="cover-letter" label="Upload Cover Letter" />
          <UploadZone
            id="certificates"
            label="Upload Certificates (Academic / Professional)"
          />
        </div>
      </Card>

      <Card title="Additional Information">
        <div className="space-y-6">
          <Field label="Why do you want to join KSHC–Cube?">
            <textarea
              rows={4}
              placeholder="Briefly describe your motivation..."
              className="w-full rounded-lg border border-gray-200 bg-white p-4 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none"
            />
          </Field>
          <Field label="Additional Notes or Comments">
            <textarea
              rows={4}
              placeholder="Any other details you'd like to share..."
              className="w-full rounded-lg border border-gray-200 bg-white p-4 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none"
            />
          </Field>
        </div>
      </Card>

      <div>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            required
            className="h-5 w-5 rounded border-gray-300 accent-orange-mid"
          />
          <span className="font-bold text-navy">
            I confirm that the information provided is accurate and complete
          </span>
        </label>

        {submitted && (
          <p className="mt-6 font-semibold text-green-700" role="status">
            Application received — thank you! Our recruitment team will contact
            you after reviewing your profile.
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-5">
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-b from-orange to-orange-mid px-8 py-4 text-lg font-bold text-white shadow-[0_8px_20px_rgba(232,135,30,0.4)] transition-transform hover:scale-[1.02]"
          >
            Submit Application
          </button>
          <button
            type="button"
            className="rounded-lg border-2 border-navy px-8 py-4 text-lg font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Save as Draft
          </button>
        </div>
      </div>
    </form>
  );
}
