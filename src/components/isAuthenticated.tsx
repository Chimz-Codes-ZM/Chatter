import React from 'react'
import { useContext, useEffect } from "react";
import { UserContext } from '@/UserContext';
import { useRouter } from "next/router";

function isAuthenticated<T>(WrappedComponent: React.ComponentType<T>) {
    return function WithAuthenticationWrapper(props: any) {
        const context = useContext(UserContext);
        const userInfo = context?.userInfo;
        const router = useRouter();
    
        useEffect(() => {
          if (!userInfo) {
            router.push("/login");
          }
        }, [userInfo, router]);
    
        return userInfo ? <WrappedComponent {...props} /> : null;
      };
}

export default isAuthenticated