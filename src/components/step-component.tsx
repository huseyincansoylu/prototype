"use client"

import { useEffect } from "react"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useStepStore } from "@/store/useStepStore"

export default function StepComponent() {
  const {
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    goToStep,
    setTotalSteps,
  } = useStepStore()

  // Example of setting total steps based on content
  useEffect(() => {
    setTotalSteps(4) // Set to 4 steps for this example
  }, [setTotalSteps])

  // Content for each step
  const stepContent = [
    {
      title: "Description",
      content: "Describe your AI Agent",
    },
    {
      title: "İletişim Bilgileri",
      content: "Bu adımda iletişim bilgilerinizi giriniz.",
    },
    {
      title: "Tercihler",
      content: "Bu adımda tercihlerinizi belirleyin.",
    },
    {
      title: "Onay",
      content: "Bilgilerinizi gözden geçirin ve onaylayın.",
    },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                onClick={() => goToStep(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  index < currentStep
                    ? "bg-primary text-primary-foreground border-primary"
                    : index === currentStep
                      ? "border-primary text-primary"
                      : "border-muted-foreground text-muted-foreground"
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </button>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1 w-24 mt-5 ${index < currentStep ? "bg-primary" : "bg-muted"}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Current step content */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{stepContent[currentStep].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-h-[200px]">
            {stepContent[currentStep].content}

            {/* Example form fields based on step */}
            {currentStep === 0 && (
              <div className="grid gap-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      Agent Name
                    </label>
                    <input
                      id="agentName"
                      className="w-full p-2 border rounded-md"
                      placeholder="Agent Name"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="grid gap-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="E-posta adresiniz"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    className="w-full p-2 border rounded-md"
                    placeholder="Telefon numaranız"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <input id="newsletter" type="checkbox" className="w-4 h-4" />
                  <label htmlFor="newsletter" className="text-sm">
                    Bülten aboneliği
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="notifications"
                    type="checkbox"
                    className="w-4 h-4"
                  />
                  <label htmlFor="notifications" className="text-sm">
                    Bildirimler
                  </label>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Tüm bilgileriniz kaydedilecektir. Devam etmek için "Tamamla"
                  butonuna tıklayın.
                </p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="flex space-x-2">
            {/* Example of direct step navigation */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-2 h-2 rounded-full ${index === currentStep ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>

            <span className="text-sm text-muted-foreground">
              {currentStep + 1} / {totalSteps}
            </span>
          </div>

          <Button
            onClick={
              currentStep === totalSteps - 1
                ? () => alert("Form tamamlandı!")
                : nextStep
            }
          >
            {currentStep === totalSteps - 1 ? (
              "Tamamla"
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
