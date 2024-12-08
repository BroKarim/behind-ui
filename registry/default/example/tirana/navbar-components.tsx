import { Menu } from "lucide-react";
import { Fragment, createContext, useContext, useState } from "react";
import { AnimatePresence, FadeIn } from "./fade-in";
import { Button } from "@/components/ui/button";
import { ExpandableTabs } from "./expandable-tab";
import {
  Bell,
  HelpCircle,
  Settings,
  Shield,
  Mail,
  User,
  FileText,
  Lock,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface NavbarMobileContextProps {
  isOpen: boolean;
  toggleNavbar: () => void;
  isDocsOpen: boolean;
  toggleDocsNavbar: () => void;
}

const NavbarContext = createContext<NavbarMobileContextProps | undefined>(
  undefined,
);

// navbar contenxt
export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleDocsNavbar = () => {
    setIsDocsOpen((prevIsOpen) => !prevIsOpen);
  };
  // @ts-ignore
  return (
    <NavbarContext.Provider
      value={{ isOpen, toggleNavbar, isDocsOpen, toggleDocsNavbar }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarMobile = (): NavbarMobileContextProps => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "useNavbarMobile must be used within a NavbarMobileProvider",
    );
  }
  return context;
};

export const NavbarMobileBtn: React.FC = () => {
  const { toggleNavbar } = useNavbarMobile();

  return (
    <div className="z-10 flex items-center">
      <button
        className="block overflow-hidden px-2.5 text-muted-foreground md:hidden"
        onClick={() => {
          toggleNavbar();
        }}
      >
        <Menu color="black" />
      </button>
    </div>
  );
};

export const NavbarMobile = () => {
  const { isOpen, toggleNavbar } = useNavbarMobile();

  const tabs = [
    { title: "Notifications", icon: Bell },
    { title: "Support", icon: HelpCircle },
  ];

  return (
    <div className="fixed left-0  top-[60px] z-[100] mx-auto w-full  transform-gpu bg-background  px-4 md:hidden  ">
      <AnimatePresence>
        {isOpen && (
          <FadeIn
            fromTopToBottom
            className="overflow-y-auto bg-transparent py-2"
          >
            {navMenu.map((menu, i) => (
              <Fragment key={menu.name}>
                <Button className="block bg-transparent py-4 text-base  text-black">
                  {menu.name}
                </Button>
              </Fragment>
            ))}
            <Separator className="mt-6 h-[2px] bg-black" />
            <div className="flex w-full justify-end ">
              <ExpandableTabs tabs={tabs} />
            </div>
          </FadeIn>
        )}
      </AnimatePresence>
    </div>
  );
};

export const navMenu: {
  name: string;
  path: string;
  child?: {
    name: string;
    path: string;
  }[];
}[] = [
  {
    name: "feature",
    path: "/",
  },

  {
    name: "pricing",
    path: "/",
  },
  {
    name: "help center",
    path: "/",
  },
  {
    name: "toolbox",
    path: "/",
  },
];
