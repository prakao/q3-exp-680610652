import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboard,
  Grid,
  Utensils,
  Car,
  GraduationCap,
  Lightbulb,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";
import { useItemStore } from "@/store/dataStore";

const categoryData = [
  { name: "Food", label: "Food", icon: Utensils },
  { name: "Transport", label: "Transport", icon: Car },
  { name: "Education", label: "Education", icon: GraduationCap },
  { name: "Utilities", label: "Utilities", icon: Lightbulb },
  { name: "Entertainment", label: "Entertainment", icon: Gamepad2 },
  { name: "Other", label: "Other", icon: MoreHorizontal },
] as const;

export function DashboardTabs() {
  const expenses = useItemStore((state) => state.expenses);

  // 2. คำนวณข้อมูลสำหรับหน้า Overview
  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalTransactions = expenses.length;
  const averageExpense =
    totalTransactions > 0 ? totalSpent / totalTransactions : 0;

  // 3. คำนวณข้อมูลแยกตาม Category
  const categoryTotals = expenses.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-fit grid-cols-2 mb-4 bg-muted p-1 rounded-lg">
          <TabsTrigger
            value="overview"
            className="flex items-center gap-2 px-4 py-2"
          >
            <LayoutDashboard className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="category"
            className="flex items-center gap-2 px-4 py-2"
          >
            <Grid className="h-4 w-4" />
            By Category
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Spent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">
                  ฿
                  {totalSpent.toLocaleString("th-TH", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {totalTransactions}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Expense
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  ฿
                  {averageExpense.toLocaleString("th-TH", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="category">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categoryData.map((cat) => {
              const Icon = cat.icon;
              const amount = categoryTotals[cat.name] || 0; // ถ้าไม่มีข้อมูลใน category นั้นให้เป็น 0

              return (
                <Card
                  key={cat.name}
                  className="flex flex-col justify-between p-3"
                >
                  <CardHeader className="p-0 space-y-1">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <CardTitle className="text-xs font-medium text-muted-foreground">
                      {cat.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-3">
                    <div className="text-sm font-bold text-foreground">
                      ฿
                      {amount.toLocaleString("th-TH", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
