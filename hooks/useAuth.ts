"use client";

import { useState } from "react";

export default function useAuth() {
    /**
     * Temporary authentication state.
     *
     * Later this will be replaced with:
     * - NextAuth
     * - Clerk
     * - Firebase Auth
     * - JWT
     * - API
     */

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return {
        isAuthenticated,
        login: () => setIsAuthenticated(true),
        logout: () => setIsAuthenticated(false),
    };
}