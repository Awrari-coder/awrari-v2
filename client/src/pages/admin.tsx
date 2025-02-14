import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Inquiry } from "@shared/schema";

export default function Admin() {
  const { data: inquiries } = useQuery<Inquiry[]>({
    queryKey: ["/api/inquiries"],
  });

  return (
    <div className="container mx-auto px-4 py-20">
      <Card>
        <CardHeader>
          <CardTitle>Customer Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries?.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell>{inquiry.name}</TableCell>
                  <TableCell>{inquiry.email}</TableCell>
                  <TableCell>{inquiry.company || "-"}</TableCell>
                  <TableCell>{inquiry.service}</TableCell>
                  <TableCell className="max-w-md truncate">
                    {inquiry.message}
                  </TableCell>
                </TableRow>
              ))}
              {!inquiries?.length && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No inquiries yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
