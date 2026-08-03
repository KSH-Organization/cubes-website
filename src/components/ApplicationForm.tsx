"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CalendarDays, ChevronDown, Loader2, UploadCloud } from "lucide-react";
import { submitEntry } from "@/lib/submit";

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

function DateInput({ name, placeholder }: { name: string; placeholder: string }) {
  return (
    <div className="relative">
      <input type="text" name={name} placeholder={placeholder} className={inputClass} />
      <CalendarDays
        size={18}
        className="pointer-events-none absolute top-1/2 end-4 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}

function UploadZone({
  label,
  required,
  id,
  hint,
  types,
}: {
  label: string;
  required?: boolean;
  id: string;
  hint: string;
  types: string;
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
          {fileName ?? hint}
        </span>
        <span className="mt-1 text-[13px] text-gray-500">
          {types}
        </span>
        <input
          id={id}
          name={id}
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </label>
    </div>
  );
}

/** Every visible string, so the form can be translated from the content tree. */
export type FormStrings = Record<string, string>;

/** One open vacancy, as stored in the `vacancies` collection. */
export type JobOption = { key: string; title: string };

export default function ApplicationForm({
  t,
  jobs,
}: {
  t: FormStrings;
  jobs: JobOption[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const raw = new FormData(form);

    // Submissions are JSON, so uploads travel as their filenames — the actual
    // documents are collected separately (the notes field asks for links).
    const data: Record<string, unknown> = Object.fromEntries(
      [...raw.entries()].filter(([, v]) => typeof v === "string"),
    );
    for (const key of ["cv", "coverLetter", "certificates"]) {
      const file = raw.get(key);
      if (file instanceof File && file.name) data[key] = file.name;
    }

    setSending(true);
    setError(null);
    const result = await submitEntry("job-applications", data);
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Keep everything they typed — this is a long form to re-fill.
      setError(result.error);
    }
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <Card title={t.sectionPersonal}>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label={t.fullName} required>
            <input
              name="fullName"
                            type="text"
              required
              placeholder={t.fullNamePlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.email} required>
            <input
              name="email"
                            type="email"
              required
              placeholder={t.emailPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.phone} required>
            <input
              name="phone"
                            type="tel"
              required
              placeholder={t.phonePlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.dateOfBirth}>
            <DateInput name="dateOfBirth" placeholder={t.datePlaceholder} />
          </Field>
          <Field label={t.nationality}>
            <input name="nationality" type="text" placeholder={t.nationalityPlaceholder} className={inputClass} />
          </Field>
          <Field label={t.location} required>
            <input
              name="location"
                            type="text"
              required
              placeholder={t.locationPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.linkedin}>
            <input
              name="linkedin"
                            type="url"
              placeholder={t.linkedinPlaceholder}
              className={inputClass}
            />
          </Field>
        </div>
      </Card>

      <Card title={t.sectionProfessional}>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label={t.position} required>
            <div className="relative">
              <select
                name="position"
                required
                defaultValue=""
                className={`${inputClass} appearance-none pe-10 invalid:text-gray-400`}
              >
                <option value="" disabled>
                  {t.positionPlaceholder}
                </option>
                {/* Real openings, so the value matches a vacancy and is
                    already translated for the current locale. */}
                {jobs.map((j) => (
                  <option key={j.key} value={j.key}>
                    {j.title}
                  </option>
                ))}
                <option value="other">{t.positionOther}</option>
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute top-1/2 end-4 -translate-y-1/2 text-gray-500"
              />
            </div>
          </Field>
          <Field label={t.experience} required>
            <input
              name="experience"
                            type="number"
              required
              min={0}
              placeholder={t.experiencePlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.employer}>
            <input
              name="employer"
                            type="text"
              placeholder={t.employerPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.jobTitle}>
            <input name="jobTitle" type="text" placeholder={t.jobTitlePlaceholder} className={inputClass} />
          </Field>
          <Field label={t.expectedSalary}>
            <input
              name="expectedSalary"
                            type="text"
              placeholder={t.salaryPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.startDate}>
            <DateInput name="startDate" placeholder={t.startDatePlaceholder} />
          </Field>
        </div>
      </Card>

      <Card title={t.sectionEducation}>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label={t.degree} required>
            <input
              name="degree"
                            type="text"
              required
              placeholder={t.degreePlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.university} required>
            <input
              name="university"
                            type="text"
              required
              placeholder={t.universityPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.fieldOfStudy} required>
            <input
              name="fieldOfStudy"
                            type="text"
              required
              placeholder={t.fieldPlaceholder}
              className={inputClass}
            />
          </Field>
          <Field label={t.graduationYear}>
            <input name="graduationYear" type="text" placeholder={t.yearPlaceholder} className={inputClass} />
          </Field>
        </div>
      </Card>

      <Card title={t.sectionDocuments}>
        <div className="space-y-8">
          <UploadZone
            id="cv"
            label={t.uploadCv}
            hint={t.uploadHint}
            types={t.uploadTypes}
            required
          />
          <UploadZone
            id="coverLetter"
            label={t.uploadCover}
            hint={t.uploadHint}
            types={t.uploadTypes}
          />
          <UploadZone
            id="certificates"
            label={t.uploadCertificates}
            hint={t.uploadHint}
            types={t.uploadTypes}
          />
        </div>
      </Card>

      <Card title={t.sectionAdditional}>
        <div className="space-y-6">
          <Field label={t.motivation}>
            <textarea
              name="motivation"
              rows={4}
              placeholder={t.motivationPlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-white p-4 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none"
            />
          </Field>
          <Field label={t.notes}>
            <textarea
              name="notes"
              rows={4}
              placeholder={t.notesPlaceholder}
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
            {t.consent}
          </span>
        </label>

        {submitted && (
          <p className="mt-6 font-semibold text-green-700" role="status">
            {t.success}
          </p>
        )}

        {error && (
          <p className="mt-6 font-semibold text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-5">
          <button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-orange to-orange-mid px-8 py-4 text-lg font-bold text-white shadow-[0_8px_20px_rgba(232,135,30,0.4)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {sending ? t.submitting : t.submit}
            {sending && <Loader2 size={20} className="animate-spin" aria-hidden />}
          </button>
          <button
            type="button"
            className="rounded-lg border-2 border-navy px-8 py-4 text-lg font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            {t.draft}
          </button>
        </div>
      </div>
    </form>
  );
}
