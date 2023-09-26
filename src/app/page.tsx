import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Mail, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col border-b border-zinc-200 pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold  text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid-cols-form grid gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Daniel" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Guimarães" />
            </Input.Root>
          </div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>

          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="daniel.guimaraes.vieira.dev@gmail.com"
            />
          </Input.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile
            </span>
          </label>

          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
              <User className="h-8 w-8 text-violet-500" />
            </div>

            <label htmlFor="photo">Selecionar arquivo</label>

            <input type="file" className="sr-only" id="photo" />
          </div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <Input.Root>
            <Input.Control
              id="role"
              type="text"
              defaultValue="Front-end Developer"
            />
          </Input.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>

          <div></div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            TimeZone
          </label>

          <div></div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction
            </span>
          </label>

          <div></div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio Projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work
            </span>
          </label>

          <div></div>
        </div>

        <div className="flex justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="settings"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold  text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}
