import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { SelectItem } from '@/components/Form/Select/SelectItem'
import { SettingsTabs } from '@/components/SettingsTabs'
import * as FileInput from '@/components/Form/FileInput'
import { Textarea } from '@/components/Form/Textarea'
import { Select } from '@/components/Form/Select'
import * as Input from '@/components/Input'
import { Button } from '@/components/Button'

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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
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

        <div className="grid grid-cols-form gap-3 pt-5">
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

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile
            </span>
          </label>

          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
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

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>

          <Select placeholder="Select a country">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="us" text="United State" />
            <SelectItem value="rus" text="Russia" />
          </Select>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            TimeZone
          </label>

          <Select placeholder="Select a timezone">
            <SelectItem value="utc8" text="São Paulo (GMT-03:00)" />
            <SelectItem value="utc3" text="Cuiabá (GMT-04:00)" />
            <SelectItem value="utc4" text="Manaus (GMT-04:00)" />
          </Select>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction
            </span>
          </label>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Select defaultValue="normal">
                <SelectItem value="normal" defaultChecked text="Normal text" />
                <SelectItem value="md" text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>

            <Textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio Projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work
            </span>
          </label>

          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex justify-end gap-2 pt-5">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>
    </>
  )
}
