import React from "react";
import Form from "../component/Forms";

export default function SwabiHeroesDeletion() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl border border-slate-200 p-6 sm:p-10">
        
        {/* Header - Clearly displays App Name and Developer Name for Google Play compliance */}
        <div className="border-b border-slate-200 pb-6 mb-6">
          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Account & Data Deletion Policy
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Delete Your Swabi heroes hub Account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Developer: <strong className="text-slate-900">CODE IN EASY WAY</strong> &bull; App Package:{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
              pk.swabiheroes.app
            </code>
          </p>
        </div>

        {/* Overview */}
        <section className="mb-8 space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
          <p>
            Users of the <strong>Swabi heroes hub</strong> mobile application (published by{" "}
            <strong>CODE IN EASY WAY</strong>) can permanently delete their account and all associated
            personal data at any time. Once processed, account deletion is permanent and cannot be undone.
          </p>
        </section>

        {/* Deletion Methods */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            How to Request Account & Data Deletion
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Option 1: Inside the App</h3>
              <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1.5">
                <li>
                  Open <strong>Swabi heroes hub</strong> on your device.
                </li>
                <li>
                  Go to your <strong>Profile</strong> or <strong>Settings</strong> screen.
                </li>
                <li>
                  Tap <strong>Delete Account</strong> and confirm your request.
                </li>
              </ol>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Option 2: Via Web (No App Needed)</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                If you have already uninstalled the app, submit your registered phone number and email using the form below, or email us directly at{" "}
                <a
                  href="mailto:support@shezitechsolution.com"
                  className="text-blue-600 underline font-medium"
                >
                  support@shezitechsolution.com
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Data Deleted vs Retained */}
        <section className="mb-8 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            What Data Is Deleted & Retention Policy
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 space-y-3">
            <div>
              <strong className="text-slate-900">Data Permanently Deleted:</strong>
              <p className="mt-1">
                Your user account credentials, full name, phone number, email address, blood group details, donor availability status, city/area location, and any SOS or donation history tied to your profile.
              </p>
            </div>
            <div>
              <strong className="text-slate-900">Data Retained:</strong>
              <p className="mt-1">
                We do not retain any personal user data after your account is deleted, except anonymized system security logs retained for up to <strong>30 days</strong> solely to prevent fraud or abuse, after which they are automatically purged.
              </p>
            </div>
            <div>
              <strong className="text-slate-900">Processing Timeline:</strong>
              <p className="mt-1">
                All web deletion requests are verified and permanently completed within <strong>7 business days</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Integrated Formspree Component */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Submit an Account Deletion Request
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Please enter your full name, registered email, and registered phone number for your{" "}
            <strong>Swabi heroes hub</strong> account, and mention{" "}
            <strong>"Delete Swabi heroes hub Account"</strong> in the message box.
          </p>

          <Form phone={true} />
        </section>

      </div>
    </div>
  );
}