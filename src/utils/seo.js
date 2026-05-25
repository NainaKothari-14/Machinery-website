import { company } from "../content/company";

export function getPageTitle(page) {
  if (!page) return company.name;
  return `${page} | ${company.name}`;
}

export function getDefaultDescription() {
  return company.shortDescription;
}
