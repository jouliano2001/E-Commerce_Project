import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { Facebook, Instagram, Twitter, Github, Armchair } from "lucide-react";

export default function FooterComponent() {
  return (
    <Footer container className="bg-gray-800 rounded-none border-t border-gray-700">
      <div className="w-[100vw] px-4 py-8">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-6 sm:mb-0">
            <FooterBrand
              href="/"
              className="flex items-center space-x-3"
            >
              <Armchair className="h-8 w-8 text-purple-400" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                COMFORTY
              </span>
            </FooterBrand>
            <p className="mt-4 max-w-sm text-gray-400">
              Premium furniture for modern living spaces. Quality craftsmanship meets contemporary design.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle 
                title="Shop" 
                className="mb-4 text-lg font-semibold text-gray-100 uppercase" 
              />
              <FooterLinkGroup col className="space-y-3">
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Living Room
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Bedroom
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Office
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Outdoor
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle 
                title="Support" 
                className="mb-4 text-lg font-semibold text-gray-100 uppercase" 
              />
              <FooterLinkGroup col className="space-y-3">
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact Us
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  FAQs
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Shipping
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Returns
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle 
                title="Legal" 
                className="mb-4 text-lg font-semibold text-gray-100 uppercase" 
              />
              <FooterLinkGroup col className="space-y-3">
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms & Conditions
                </FooterLink>
                <FooterLink href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Warranty
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className="my-8 border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright 
            href="#" 
            by="COMFORTY™" 
            year={new Date().getFullYear()} 
            className="text-gray-400"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}