"use client";


import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import DashboardExport from "@/components/dashboard/DashboardExport";

import StatsGrid from "@/components/dashboard/StatsGrid";
import SalesChart from "@/components/dashboard/SalesChart";
import CustomerChart from "@/components/dashboard/CustomerChart";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DealsTable from "@/components/dashboard/DealsTable";
import FeaturedProducts from "@/components/dashboard/FeaturedProducts";
import RecentOrders from "@/components/dashboard/RecentOrders";
import RecentActivity from "@/components/dashboard/RecentActivity";

import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import EmptyDashboard from "@/components/dashboard/EmptyDashboard";

import useDashboard from "@/hooks/useDashboard";


export default function HomePage() {


  const {
    loading,
    stats,
    sales,
    customers,
    analytics,
    deals,
    featuredProducts,
    recentOrders,
    recentActivities,
  } = useDashboard();



  if (loading) {

    return <DashboardSkeleton />;

  }



  if (stats.length === 0) {

    return <EmptyDashboard />;

  }



  return (

    <div
      className="
        min-h-screen
        bg-background
        text-foreground
        overflow-x-hidden
      "
    >


      <div
        className="
          min-h-screen
          w-full
        "
      >





        {/* Main */}
        <div
          className="
          md:ml-[220px]
          lg:ml-[240px]
          min-h-screen
          flex 
          flex-col
          "
        >


          <main
            className="
              space-y-8
              p-4
              sm:p-6
              lg:p-8
              mt-20
            "
          >



            {/* Top */}

            <div
              className="
                flex
                flex-col
                gap-6
                xl:flex-row
                xl:items-center
                xl:justify-between
              "
            >


              <DashboardHeader />



              <div
                className="
                  flex

                  flex-wrap

                  items-center

                  gap-3
                "
              >

                <DashboardFilters />

                <DashboardExport />

              </div>


            </div>





            {/* Stats */}

            <StatsGrid
              stats={stats}
            />






            {/* Charts */}

            <div
              className="
                grid

                grid-cols-1

                gap-6

                xl:grid-cols-3
              "
            >

              <div
                className="
                  xl:col-span-2
                "
              >

                <SalesChart
                  data={sales}
                />

              </div>



              <CustomerChart
                data={customers}
              />


            </div>






            {/* Analytics */}

            <AnalyticsChart
              data={analytics}
            />






            {/* Deals */}

            <DealsTable
              deals={deals}
            />







            {/* Products */}

            <div
              className="
                grid

                grid-cols-1

                gap-6

                xl:grid-cols-2
              "
            >

              <FeaturedProducts
                products={featuredProducts}
              />


              <RecentOrders
                orders={recentOrders}
              />


            </div>







            {/* Activity */}

            <RecentActivity
              activities={recentActivities}
            />



          </main>


        </div>


      </div>


    </div>

  );
}