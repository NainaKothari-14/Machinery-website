import { companyInfo } from "../data/companyInfo";

export function getPageTitle(page) {
  if (!page) return companyInfo.name;
  return `${page} | ${companyInfo.name}`;
}

export function getDefaultDescription() {
  return companyInfo.shortDescription;
}
