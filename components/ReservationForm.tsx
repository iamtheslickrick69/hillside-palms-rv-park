"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Phone, CheckCircle2, ChevronLeft, ChevronRight, MapPin, Clock, Info } from "lucide-react"

type FormData = {
  // Step 1: Guest Information
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  // Step 2: RV Details
  rvType: string
  rvLength: string
  slideOuts: string
  needs50Amp: string
  licensePlate: string
  plateState: string
  rvMake: string
  rvModel: string
  rvYear: string
  // Step 3: Stay Information
  arrivalDate: string
  departureDate: string
  numAdults: string
  numChildren: string
  hasPets: string
  numDogs: string
  petNames: string
  // Step 4: Space Preference
  spacePreference: string
  // Step 5: Additional Information
  howHeard: string
  specialRequests: string
  firstTimeVisitor: string
  interestedLongTerm: string
  // Step 6: Review & Submit
  agreeTerms: boolean
  agreeBackgroundCheck: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  rvType: "",
  rvLength: "",
  slideOuts: "",
  needs50Amp: "",
  licensePlate: "",
  plateState: "",
  rvMake: "",
  rvModel: "",
  rvYear: "",
  arrivalDate: "",
  departureDate: "",
  numAdults: "",
  numChildren: "",
  hasPets: "",
  numDogs: "",
  petNames: "",
  spacePreference: "",
  howHeard: "",
  specialRequests: "",
  firstTimeVisitor: "",
  interestedLongTerm: "",
  agreeTerms: false,
  agreeBackgroundCheck: false,
}

const steps = [
  { number: 1, title: "Guest Info" },
  { number: 2, title: "RV Details" },
  { number: 3, title: "Stay Info" },
  { number: 4, title: "Space" },
  { number: 5, title: "Additional" },
  { number: 6, title: "Review" },
]

const rvTypes = ["Motorhome", "Travel Trailer", "Fifth Wheel", "Tiny Home", "Other"]
const howHeardOptions = [
  "Google Search",
  "Facebook",
  "Friend/Family Referral",
  "Returning Guest",
  "RV Park Directory",
  "Drove By",
  "Other",
]

export function ReservationForm() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [formData, setFormData] = React.useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-background min-h-screen">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-figtree text-[40px] font-normal mb-4">Reservation Request Received!</h1>
          <p className="font-figtree text-lg text-muted-foreground mb-8">
            Thank you for your interest in Hillside Palms RV Park. We'll review your application and contact you within
            24 hours to confirm availability and finalize your booking.
          </p>
          <div className="p-6 rounded-2xl border border-border bg-card text-left mb-8">
            <h3 className="font-figtree text-xl font-medium mb-4">What happens next?</h3>
            <ul className="space-y-3 font-figtree text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#156d95] mt-0.5 flex-shrink-0" />
                <span>Our team will review your reservation request</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#156d95] mt-0.5 flex-shrink-0" />
                <span>We'll check availability for your requested dates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#156d95] mt-0.5 flex-shrink-0" />
                <span>You'll receive a confirmation call or email within 24 hours</span>
              </li>
            </ul>
          </div>
          <a
            href="tel:4356732809"
            className="inline-flex items-center gap-2 border border-[#156d95] text-[#156d95] px-6 py-3 rounded-full font-figtree text-lg hover:bg-[#156d95]/10 transition-all"
          >
            <Phone className="w-5 h-5" />
            Need immediate assistance? Call (435) 673-2809
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-figtree text-[40px] md:text-[48px] font-normal leading-tight mb-4">
            Reserve Your Space at Hillside Palms
          </h1>
          <p className="font-figtree text-lg text-muted-foreground">
            Quick & Easy Online Booking • Confirmation Within 24 Hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center font-figtree text-sm font-medium transition-all",
                          currentStep >= step.number ? "bg-[#156d95] text-white" : "bg-secondary text-muted-foreground",
                        )}
                      >
                        {currentStep > step.number ? <CheckCircle2 className="w-5 h-5" /> : step.number}
                      </div>
                      <span className="font-figtree text-xs mt-2 text-muted-foreground hidden sm:block">
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={cn(
                          "flex-1 h-1 mx-2 rounded-full transition-all",
                          currentStep > step.number ? "bg-[#156d95]" : "bg-secondary",
                        )}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
              {/* Step 1: Guest Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="font-figtree text-2xl font-medium mb-6">Guest Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">Street Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2">
                      <label className="block font-figtree text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">State</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => updateField("state", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">ZIP</label>
                      <input
                        type="text"
                        value={formData.zip}
                        onChange={(e) => updateField("zip", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: RV Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="font-figtree text-2xl font-medium mb-6">RV Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        RV Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.rvType}
                        onChange={(e) => updateField("rvType", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      >
                        <option value="">Select type...</option>
                        {rvTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        RV Length (feet) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        value={formData.rvLength}
                        onChange={(e) => updateField("rvLength", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">Number of Slide-Outs</label>
                      <input
                        type="number"
                        value={formData.slideOuts}
                        onChange={(e) => updateField("slideOuts", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">Do you need 50 amp service?</label>
                      <div className="flex gap-4 pt-2">
                        <label className="flex items-center gap-2 font-figtree cursor-pointer">
                          <input
                            type="radio"
                            name="needs50Amp"
                            value="yes"
                            checked={formData.needs50Amp === "yes"}
                            onChange={(e) => updateField("needs50Amp", e.target.value)}
                            className="w-4 h-4 text-[#156d95]"
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-2 font-figtree cursor-pointer">
                          <input
                            type="radio"
                            name="needs50Amp"
                            value="no"
                            checked={formData.needs50Amp === "no"}
                            onChange={(e) => updateField("needs50Amp", e.target.value)}
                            className="w-4 h-4 text-[#156d95]"
                          />
                          No (30 amp is fine)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">Vehicle License Plate</label>
                      <input
                        type="text"
                        value={formData.licensePlate}
                        onChange={(e) => updateField("licensePlate", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">Plate State</label>
                      <input
                        type="text"
                        value={formData.plateState}
                        onChange={(e) => updateField("plateState", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">RV Make</label>
                      <input
                        type="text"
                        value={formData.rvMake}
                        onChange={(e) => updateField("rvMake", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">RV Model</label>
                      <input
                        type="text"
                        value={formData.rvModel}
                        onChange={(e) => updateField("rvModel", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">RV Year</label>
                      <input
                        type="text"
                        value={formData.rvYear}
                        onChange={(e) => updateField("rvYear", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Stay Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="font-figtree text-2xl font-medium mb-6">Stay Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        Arrival Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(e) => updateField("arrivalDate", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        Departure Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => updateField("departureDate", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        Number of Adults <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.numAdults}
                        onChange={(e) => updateField("numAdults", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">Number of Children</label>
                      <input
                        type="number"
                        min="0"
                        value={formData.numChildren}
                        onChange={(e) => updateField("numChildren", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">Bringing Pets?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 font-figtree cursor-pointer">
                        <input
                          type="radio"
                          name="hasPets"
                          value="yes"
                          checked={formData.hasPets === "yes"}
                          onChange={(e) => updateField("hasPets", e.target.value)}
                          className="w-4 h-4 text-[#156d95]"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2 font-figtree cursor-pointer">
                        <input
                          type="radio"
                          name="hasPets"
                          value="no"
                          checked={formData.hasPets === "no"}
                          onChange={(e) => updateField("hasPets", e.target.value)}
                          className="w-4 h-4 text-[#156d95]"
                        />
                        No
                      </label>
                    </div>
                  </div>
                  {formData.hasPets === "yes" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-secondary/50">
                      <div>
                        <label className="block font-figtree text-sm font-medium mb-2">
                          Number of Dogs (under 20 lbs, limit 1)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="1"
                          value={formData.numDogs}
                          onChange={(e) => updateField("numDogs", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        />
                      </div>
                      <div>
                        <label className="block font-figtree text-sm font-medium mb-2">Pet Name & Breed</label>
                        <input
                          type="text"
                          value={formData.petNames}
                          onChange={(e) => updateField("petNames", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Space Preference */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="font-figtree text-2xl font-medium mb-6">Space Preference</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        value: "standard",
                        title: "Standard Space",
                        desc: "Full hookups, paved roads, concrete pads",
                        price: "From $55/night",
                      },
                      {
                        value: "city-view",
                        title: "Premium City View",
                        desc: "180° panoramic views, upper tier location",
                        price: "From $65/night",
                      },
                      {
                        value: "storage",
                        title: "RV Storage Only",
                        desc: "Secure storage without hookups",
                        price: "Call for rates",
                      },
                      {
                        value: "no-preference",
                        title: "No Preference",
                        desc: "Best available space for my dates",
                        price: "Varies",
                      },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "p-6 rounded-xl border-2 cursor-pointer transition-all",
                          formData.spacePreference === option.value
                            ? "border-[#156d95] bg-[#156d95]/5"
                            : "border-border hover:border-[#156d95]/50",
                        )}
                      >
                        <input
                          type="radio"
                          name="spacePreference"
                          value={option.value}
                          checked={formData.spacePreference === option.value}
                          onChange={(e) => updateField("spacePreference", e.target.value)}
                          className="sr-only"
                        />
                        <div className="font-figtree text-lg font-medium mb-1">{option.title}</div>
                        <div className="font-figtree text-sm text-muted-foreground mb-2">{option.desc}</div>
                        <div className="font-figtree text-sm text-[#156d95] font-medium">{option.price}</div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Additional Information */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="font-figtree text-2xl font-medium mb-6">Additional Information</h2>
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">How did you hear about us?</label>
                    <select
                      value={formData.howHeard}
                      onChange={(e) => updateField("howHeard", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95]"
                    >
                      <option value="">Select...</option>
                      {howHeardOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-figtree text-sm font-medium mb-2">
                      Special Requests or Accessibility Needs
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => updateField("specialRequests", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-figtree focus:outline-none focus:ring-2 focus:ring-[#156d95] resize-none"
                      placeholder="Let us know if you have any special requests..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        First time visiting St. George?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 font-figtree cursor-pointer">
                          <input
                            type="radio"
                            name="firstTimeVisitor"
                            value="yes"
                            checked={formData.firstTimeVisitor === "yes"}
                            onChange={(e) => updateField("firstTimeVisitor", e.target.value)}
                            className="w-4 h-4 text-[#156d95]"
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-2 font-figtree cursor-pointer">
                          <input
                            type="radio"
                            name="firstTimeVisitor"
                            value="no"
                            checked={formData.firstTimeVisitor === "no"}
                            onChange={(e) => updateField("firstTimeVisitor", e.target.value)}
                            className="w-4 h-4 text-[#156d95]"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block font-figtree text-sm font-medium mb-2">
                        Interested in long-term stay?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 font-figtree cursor-pointer">
                          <input
                            type="radio"
                            name="interestedLongTerm"
                            value="yes"
                            checked={formData.interestedLongTerm === "yes"}
                            onChange={(e) => updateField("interestedLongTerm", e.target.value)}
                            className="w-4 h-4 text-[#156d95]"
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-2 font-figtree cursor-pointer">
                          <input
                            type="radio"
                            name="interestedLongTerm"
                            value="no"
                            checked={formData.interestedLongTerm === "no"}
                            onChange={(e) => updateField("interestedLongTerm", e.target.value)}
                            className="w-4 h-4 text-[#156d95]"
                          />
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <h2 className="font-figtree text-2xl font-medium mb-6">Review Your Information</h2>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <h3 className="font-figtree text-lg font-medium mb-2">Guest Information</h3>
                      <div className="grid grid-cols-2 gap-2 font-figtree text-sm">
                        <div>
                          <span className="text-muted-foreground">Name:</span> {formData.firstName} {formData.lastName}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Email:</span> {formData.email}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Phone:</span> {formData.phone}
                        </div>
                        {formData.city && (
                          <div>
                            <span className="text-muted-foreground">Location:</span> {formData.city}, {formData.state}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary/50">
                      <h3 className="font-figtree text-lg font-medium mb-2">RV Details</h3>
                      <div className="grid grid-cols-2 gap-2 font-figtree text-sm">
                        <div>
                          <span className="text-muted-foreground">Type:</span> {formData.rvType}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Length:</span> {formData.rvLength} ft
                        </div>
                        <div>
                          <span className="text-muted-foreground">50 Amp:</span>{" "}
                          {formData.needs50Amp === "yes" ? "Yes" : "No"}
                        </div>
                        {formData.rvMake && (
                          <div>
                            <span className="text-muted-foreground">Make/Model:</span> {formData.rvMake}{" "}
                            {formData.rvModel}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-secondary/50">
                      <h3 className="font-figtree text-lg font-medium mb-2">Stay Details</h3>
                      <div className="grid grid-cols-2 gap-2 font-figtree text-sm">
                        <div>
                          <span className="text-muted-foreground">Arrival:</span> {formData.arrivalDate}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Departure:</span> {formData.departureDate}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Adults:</span> {formData.numAdults}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Children:</span> {formData.numChildren || "0"}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Space:</span>{" "}
                          {formData.spacePreference === "city-view"
                            ? "Premium City View"
                            : formData.spacePreference === "standard"
                              ? "Standard"
                              : formData.spacePreference === "storage"
                                ? "Storage Only"
                                : "No Preference"}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Pets:</span>{" "}
                          {formData.hasPets === "yes" ? `Yes (${formData.petNames})` : "No"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => updateField("agreeTerms", e.target.checked)}
                        className="mt-1 w-5 h-5 text-[#156d95] rounded"
                      />
                      <span className="font-figtree text-sm">
                        I agree to the <span className="text-[#156d95] underline">Terms & Park Rules</span> *
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeBackgroundCheck}
                        onChange={(e) => updateField("agreeBackgroundCheck", e.target.checked)}
                        className="mt-1 w-5 h-5 text-[#156d95] rounded"
                      />
                      <span className="font-figtree text-sm">
                        I consent to a background check for long-term stays (30+ days)
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full font-figtree text-base transition-all",
                    currentStep === 1
                      ? "text-muted-foreground cursor-not-allowed"
                      : "text-foreground hover:bg-secondary",
                  )}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-[#156d95] text-white px-6 py-3 rounded-full font-figtree text-base hover:bg-[#156d95]/90 transition-all"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!formData.agreeTerms}
                    className={cn(
                      "flex items-center gap-2 px-8 py-3 rounded-full font-figtree text-lg transition-all",
                      formData.agreeTerms
                        ? "bg-[#156d95] text-white hover:bg-[#156d95]/90"
                        : "bg-secondary text-muted-foreground cursor-not-allowed",
                    )}
                  >
                    Submit Reservation Request
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card sticky top-24">
              <h3 className="font-figtree text-xl font-medium mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#156d95]" />
                Before You Book
              </h3>
              <ul className="space-y-3 font-figtree text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#156d95] mt-0.5 flex-shrink-0" />
                  Reservations are subject to availability and approval
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#156d95] mt-0.5 flex-shrink-0" />
                  Long-term stays require background check
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#156d95] mt-0.5 flex-shrink-0" />
                  First-time guests complete application process
                </li>
              </ul>

              <hr className="my-6 border-border" />

              <h3 className="font-figtree text-xl font-medium mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#156d95]" />
                Arrival Info
              </h3>
              <ul className="space-y-2 font-figtree text-sm text-muted-foreground">
                <li>
                  <strong>Check-in:</strong> 2:00 PM
                </li>
                <li>
                  <strong>Check-out:</strong> 11:00 AM
                </li>
                <li>Late arrivals? Call ahead to arrange</li>
              </ul>

              <hr className="my-6 border-border" />

              <h3 className="font-figtree text-xl font-medium mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#156d95]" />
                Location
              </h3>
              <p className="font-figtree text-sm text-muted-foreground mb-4">
                St. George, UT 84770
                <br />
                Off 600 East, 5 min from I-15
              </p>

              <hr className="my-6 border-border" />

              <h3 className="font-figtree text-lg font-medium mb-3">Need Help?</h3>
              <a
                href="tel:4356732809"
                className="flex items-center justify-center gap-2 w-full border border-[#156d95] text-[#156d95] px-4 py-3 rounded-full font-figtree text-base hover:bg-[#156d95]/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                (435) 673-2809
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
