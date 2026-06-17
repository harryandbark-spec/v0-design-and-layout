"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  CalendarDays,
  Clock,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Phone,
  Video,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { FadeIn, ScaleOnScroll } from "@/components/fade-in"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  "Tax Preparation Consultation",
  "Bookkeeping Services",
  "Business Advisory",
  "CRA Issue or Notice",
  "New Business Setup",
  "General Consultation",
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
]

type Step = 1 | 2 | 3

export default function BookPage() {
  const [step, setStep] = useState<Step>(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [meetingType, setMeetingType] = useState<string>("video")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNext = () => {
    if (step < 3) setStep((step + 1) as Step)
  }

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const canProceedStep1 = date && selectedTime
  const canProceedStep2 = meetingType

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <section className="flex flex-1 items-center justify-center py-20">
          <div className="mx-auto max-w-md px-4 text-center">
            <ScaleOnScroll>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600"
              >
                <CheckCircle2 className="h-10 w-10" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 font-serif text-3xl font-bold text-balance"
              >
                Consultation Booked!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-muted-foreground"
              >
                Thank you for scheduling a consultation with us. You will
                receive a confirmation email shortly with meeting details.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 rounded-lg border border-border bg-secondary/30 p-4"
              >
                <p className="text-sm font-medium">Your Appointment</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {date?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {selectedTime}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {meetingType === "video" ? "Video Call" : "Phone Call"}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild>
                    <Link href="/">Return to Home</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="outline">
                    <Link href="/resources">Browse Resources</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </ScaleOnScroll>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-workspace.jpg"
            alt=""
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                Book a Free Consultation
              </h1>
              <p className="mt-4 text-primary-foreground/80">
                Schedule a 15-minute call to discuss your accounting needs. No
                pressure, no obligation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="border-b border-border bg-secondary/30 py-4">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Select Date & Time" },
              { num: 2, label: "Meeting Type" },
              { num: 3, label: "Your Details" },
            ].map((s, index) => (
              <div
                key={s.num}
                className={cn(
                  "flex items-center gap-2",
                  index < 2 && "flex-1"
                )}
              >
                <motion.div
                  animate={{
                    scale: step === s.num ? 1.1 : 1,
                  }}
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                    step >= s.num
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step > s.num ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    s.num
                  )}
                </motion.div>
                <span
                  className={cn(
                    "hidden text-sm sm:block",
                    step >= s.num
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {s.label}
                </span>
                {index < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: step > s.num ? 1 : 0 }}
                    className={cn(
                      "mx-2 h-0.5 flex-1 origin-left bg-primary"
                    )}
                    style={{ backgroundColor: step > s.num ? undefined : "var(--muted)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Date & Time */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 lg:grid-cols-2"
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="h-5 w-5" />
                      Select a Date
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date < new Date() ||
                        date.getDay() === 0 ||
                        date.getDay() === 6
                      }
                      className="rounded-lg border"
                    />
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Select a Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {date ? (
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <motion.div
                            key={time}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant={selectedTime === time ? "default" : "outline"}
                              onClick={() => setSelectedTime(time)}
                              className="w-full justify-center transition-all"
                            >
                              {time}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        Please select a date first
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Meeting Type */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mx-auto max-w-lg shadow-lg">
                  <CardHeader>
                    <CardTitle>How Would You Like to Meet?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={meetingType}
                      onValueChange={setMeetingType}
                      className="space-y-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className={cn(
                          "flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-all",
                          meetingType === "video"
                            ? "border-primary bg-primary/5 shadow-md"
                            : "hover:bg-secondary/50"
                        )}
                        onClick={() => setMeetingType("video")}
                      >
                        <RadioGroupItem value="video" id="video" />
                        <div className="flex-1">
                          <Label
                            htmlFor="video"
                            className="flex cursor-pointer items-center gap-2 font-semibold"
                          >
                            <Video className="h-5 w-5 text-primary" />
                            Video Call
                          </Label>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Meet via Zoom or Google Meet. A link will be sent to
                            your email.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className={cn(
                          "flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-all",
                          meetingType === "phone"
                            ? "border-primary bg-primary/5 shadow-md"
                            : "hover:bg-secondary/50"
                        )}
                        onClick={() => setMeetingType("phone")}
                      >
                        <RadioGroupItem value="phone" id="phone" />
                        <div className="flex-1">
                          <Label
                            htmlFor="phone"
                            className="flex cursor-pointer items-center gap-2 font-semibold"
                          >
                            <Phone className="h-5 w-5 text-primary" />
                            Phone Call
                          </Label>
                          <p className="mt-1 text-sm text-muted-foreground">
                            We&apos;ll call you at your scheduled time.
                          </p>
                        </div>
                      </motion.div>
                    </RadioGroup>

                    <div className="mt-6 rounded-lg bg-secondary/50 p-4">
                      <p className="text-sm font-medium">Selected Appointment</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {date?.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        at {selectedTime}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mx-auto max-w-lg shadow-lg">
                  <CardHeader>
                    <CardTitle>Your Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            className="transition-shadow focus:shadow-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            className="transition-shadow focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="transition-shadow focus:shadow-md"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          required
                          className="transition-shadow focus:shadow-md"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">What Would You Like to Discuss?</Label>
                        <Select name="service">
                          <SelectTrigger className="transition-shadow focus:shadow-md">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          placeholder="Anything else we should know..."
                          rows={3}
                          className="transition-shadow focus:shadow-md"
                        />
                      </div>

                      <div className="rounded-lg bg-secondary/50 p-4">
                        <p className="text-sm font-medium">Appointment Summary</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {date?.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}{" "}
                          at {selectedTime}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {meetingType === "video" ? "Video Call" : "Phone Call"}
                        </p>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleBack}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Button
                            type="submit"
                            className="w-full shadow-lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Booking..." : "Confirm Booking"}
                          </Button>
                        </motion.div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons (Steps 1-2) */}
          {step < 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex justify-between"
            >
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleNext}
                  disabled={(step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2)}
                  className="shadow-lg"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
