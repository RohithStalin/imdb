import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        <Icon className="text-2xl sm:hidden" />
        <p className="sm:inline text-sm uppercase hidden">{title}</p>
      </Link>
    </div>
  );
}
