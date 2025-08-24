/**
 * Route definitions for Court role
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SecureRoute from '@/components/auth/SecureRoute';
import { Role } from '@/services/web3Service';

// Court-specific pages
import UserManagement from '@/pages/users/Manage';
import RoleManagement from '@/pages/court/RoleManagement';
import SystemConfiguration from '@/pages/court/SystemConfiguration';
import ReportsAnalytics from '@/pages/court/ReportsAnalytics';
import CasesApproval from '@/pages/cases/CasesApproval';
import AddUser from '@/pages/users/AddUser';

/**
 * Routes exclusively for Court role
 */
export const CourtRoutes = () => (
  <>
    {/* User Management Routes */}
    <Route
      path="/users/manage"
      element={
        <Layout>
          <SecureRoute allowedRoles={[Role.Court]} requireAuth={true}>
            <UserManagement />
          </SecureRoute>
        </Layout>
      }
    />
    <Route
      path="/users/add"
      element={
        <Layout>
          <SecureRoute allowedRoles={[Role.Court]} requireAuth={true}>
            <AddUser />
          </SecureRoute>
        </Layout>
      }
    />
    
    {/* Role Management */}
    <Route
      path="/users/roles"
      element={
        <Layout>
          <SecureRoute allowedRoles={[Role.Court]} requireAuth={true}>
            <RoleManagement />
          </SecureRoute>
        </Layout>
      }
    />
    
    {/* System Configuration */}
    <Route
      path="/settings/security"
      element={
        <Layout>
          <SecureRoute allowedRoles={[Role.Court]} requireAuth={true}>
            <SystemConfiguration />
          </SecureRoute>
        </Layout>
      }
    />
    
    {/* Reports and Analytics */}
    <Route
      path="/reports"
      element={
        <Layout>
          <SecureRoute allowedRoles={[Role.Court]} requireAuth={true}>
            <ReportsAnalytics />
          </SecureRoute>
        </Layout>
      }
    />
    
    {/* Case Management */}
    <Route
      path="/cases/approval"
      element={
        <Layout>
          <SecureRoute allowedRoles={[Role.Court]} requireAuth={true}>
            <CasesApproval />
          </SecureRoute>
        </Layout>
      }
    />
  </>
);