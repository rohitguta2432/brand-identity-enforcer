"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

function SettingsInput({
  id,
  label,
  type = "text",
  defaultValue,
  placeholder,
}: {
  id: string
  label: string
  type?: string
  defaultValue?: string
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  )
}

function SettingsSwitch({
  id,
  label,
  description,
  defaultChecked,
}: {
  id: string
  label: string
  description: string
  defaultChecked?: boolean
}) {
  const [checked, setChecked] = React.useState(defaultChecked ?? false)

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none"
        >
          {label}
        </label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        id={id}
        role="switch"
        type="button"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={cn(
          "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-primary" : "bg-input"
        )}
      >
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-sm ring-0 transition-transform",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  )
}

export default function SettingsPage() {
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false)

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your personal information and profile picture.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted text-lg font-semibold text-muted-foreground">
              JD
            </div>
            <Button variant="outline" size="sm">
              Change avatar
            </Button>
          </div>
          <SettingsInput
            id="name"
            label="Name"
            defaultValue="John Doe"
            placeholder="Your name"
          />
          <SettingsInput
            id="email"
            label="Email"
            type="email"
            defaultValue="john@example.com"
            placeholder="Your email address"
          />
        </CardContent>
        <CardFooter>
          <Button size="sm">Save changes</Button>
        </CardFooter>
      </Card>

      {/* Notification Preferences Section */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose how you want to be notified.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SettingsSwitch
            id="email-notifications"
            label="Email notifications"
            description="Receive notifications via email."
            defaultChecked={true}
          />
          <Separator />
          <SettingsSwitch
            id="push-notifications"
            label="Push notifications"
            description="Receive push notifications in your browser."
            defaultChecked={false}
          />
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>
            Irreversible and destructive actions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!showDeleteConfirm ? (
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium leading-none">
                  Delete account
                </p>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data.
                </p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setShowDeleteConfirm(true)}
              >
                Delete account
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4">
                <p className="text-sm font-medium">
                  Are you sure you want to delete your account?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  This action cannot be undone. All of your data will be
                  permanently removed.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="destructive"
                  size="sm"
                >
                  Yes, delete my account
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
