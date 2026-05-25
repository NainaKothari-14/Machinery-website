import { Helmet } from "react-helmet-async";
import { getDefaultDescription, getPageTitle } from "../../utils/seo";

function PageMeta({ title, description }) {
  return (
    <Helmet>
      <title>{getPageTitle(title)}</title>
      <meta
        name="description"
        content={description || getDefaultDescription()}
      />
    </Helmet>
  );
}

export default PageMeta;
