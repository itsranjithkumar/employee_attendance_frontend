import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserCheck, UserX, Users } from 'lucide-react'

type Employee = {
  id: number
  name: string
  status: 'Present' | 'Absent'
  checkInTime?: string
}

export default function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'John Doe', status: 'Present', checkInTime: '09:00 AM' },
    { id: 2, name: 'Jane Smith', status: 'Absent' },
    { id: 3, name: 'Bob Johnson', status: 'Present', checkInTime: '08:45 AM' },
  ])
  const [employeeId, setEmployeeId] = useState('')

  const handleCheckInOut = () => {
    const id = parseInt(employeeId)
    setEmployees(prevEmployees =>
      prevEmployees.map(emp =>
        emp.id === id
          ? {
              ...emp,
              status: emp.status === 'Present' ? 'Absent' : 'Present',
              checkInTime: emp.status === 'Absent' ? new Date().toLocaleTimeString() : undefined
            }
          : emp
      )
    )
    setEmployeeId('')
  }

  const presentCount = employees.filter(emp => emp.status === 'Present').length

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Attendance Management Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employees.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{presentCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
            <UserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employees.length - presentCount}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Check In/Out</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                type="number"
                id="employeeId"
                placeholder="Enter Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <Button className="mt-auto" onClick={handleCheckInOut}>Check In/Out</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Employee Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Check-In Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.status}</TableCell>
                  <TableCell>{employee.checkInTime || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}