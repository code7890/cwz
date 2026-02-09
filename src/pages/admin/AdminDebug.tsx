import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";

const AdminDebug: React.FC = () => {
  const { user } = useAuth();
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkEverything();
  }, [user]);

  const checkEverything = async () => {
    const info: any = {
      timestamp: new Date().toISOString(),
      userExists: !!user,
      userId: user?.id || "No user",
      userEmail: user?.email || "No email",
    };

    if (user) {
      // Check if profiles table exists
      try {
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        info.profileQuery = {
          success: !profileError,
          error: profileError?.message || null,
          data: profileData,
          isAdmin: profileData?.is_admin,
          role: profileData?.role,
        };
      } catch (err: any) {
        info.profileQuery = {
          success: false,
          error: err.message,
          data: null,
        };
      }

      // Check all tables
      try {
        const tables = [
          "courses",
          "blog_posts",
          "roadmaps",
          "ai_tools",
          "profiles",
        ];
        const tableChecks: any = {};

        for (const table of tables) {
          const { data, error } = await supabase
            .from(table)
            .select("id", { count: "exact", head: true });

          tableChecks[table] = {
            exists: !error,
            error: error?.message || null,
            count: data || 0,
          };
        }

        info.tables = tableChecks;
      } catch (err: any) {
        info.tablesError = err.message;
      }
    }

    setDebugInfo(info);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Checking admin status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 mb-8">
          Admin Debug Information
        </h1>

        <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            User Information
          </h2>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex">
              <span className="font-semibold w-32">User Exists:</span>
              <span
                className={
                  debugInfo.userExists ? "text-green-600" : "text-red-600"
                }
              >
                {debugInfo.userExists ? "✓ Yes" : "✗ No"}
              </span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">User ID:</span>
              <span className="text-neutral-700">{debugInfo.userId}</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Email:</span>
              <span className="text-neutral-700">{debugInfo.userEmail}</span>
            </div>
          </div>
        </div>

        {debugInfo.profileQuery && (
          <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Profile Query Result
            </h2>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex">
                <span className="font-semibold w-32">Query Success:</span>
                <span
                  className={
                    debugInfo.profileQuery.success
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {debugInfo.profileQuery.success ? "✓ Yes" : "✗ No"}
                </span>
              </div>
              {debugInfo.profileQuery.error && (
                <div className="flex">
                  <span className="font-semibold w-32">Error:</span>
                  <span className="text-red-600">
                    {debugInfo.profileQuery.error}
                  </span>
                </div>
              )}
              {debugInfo.profileQuery.data && (
                <>
                  <div className="flex">
                    <span className="font-semibold w-32">Is Admin:</span>
                    <span
                      className={
                        debugInfo.profileQuery.isAdmin
                          ? "text-green-600 font-bold"
                          : "text-red-600"
                      }
                    >
                      {debugInfo.profileQuery.isAdmin ? "✓ TRUE" : "✗ FALSE"}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">Role:</span>
                    <span className="text-neutral-700">
                      {debugInfo.profileQuery.role}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="font-semibold">Full Profile Data:</span>
                    <pre className="mt-2 p-4 bg-neutral-50 rounded overflow-auto">
                      {JSON.stringify(debugInfo.profileQuery.data, null, 2)}
                    </pre>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {debugInfo.tables && (
          <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Database Tables
            </h2>
            <div className="space-y-3">
              {Object.entries(debugInfo.tables).map(
                ([table, info]: [string, any]) => (
                  <div
                    key={table}
                    className="flex items-center justify-between p-3 bg-neutral-50 rounded"
                  >
                    <span className="font-mono text-sm font-semibold">
                      {table}
                    </span>
                    <span
                      className={
                        info.exists ? "text-green-600" : "text-red-600"
                      }
                    >
                      {info.exists ? "✓ Exists" : "✗ Missing"}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl p-6 border border-neutral-200">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Full Debug Data
          </h2>
          <pre className="p-4 bg-neutral-50 rounded overflow-auto text-xs">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={checkEverything}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Refresh Debug Info
          </button>
          <a
            href="/admin"
            className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors"
          >
            Try Admin Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminDebug;
