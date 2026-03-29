import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const users = [
  { name: "Olivia Martin", email: "olivia@acme.com", role: "Admin", status: "Active" },
  { name: "Jackson Lee", email: "jackson@acme.com", role: "Member", status: "Active" },
  { name: "Isabella Nguyen", email: "isabella@acme.com", role: "Member", status: "Inactive" },
  { name: "William Kim", email: "william@acme.com", role: "Viewer", status: "Active" },
  { name: "Sofia Davis", email: "sofia@acme.com", role: "Admin", status: "Active" },
]

export default function UsersPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground">
            Manage your team members and their account permissions.
          </p>
        </div>
        <Button size="sm">Invite User</Button>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>A list of all users in your organization.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium text-muted-foreground">Name</th>
                  <th className="pb-3 font-medium text-muted-foreground">Email</th>
                  <th className="pb-3 font-medium text-muted-foreground">Role</th>
                  <th className="pb-3 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className="border-b last:border-0">
                    <td className="py-3 font-medium">{user.name}</td>
                    <td className="py-3 text-muted-foreground">{user.email}</td>
                    <td className="py-3">{user.role}</td>
                    <td className="py-3">
                      <span
                        className={
                          user.status === "Active"
                            ? "inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                            : "inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                        }
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
