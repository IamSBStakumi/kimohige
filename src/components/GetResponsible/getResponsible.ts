const defaultScreenSize = 980;
const minScreenSize = 330;
const maxScreenSize = 1000;

function getResponsiveSize(property: string, defaultSize: number[]) {
  let defaultStyle = "";
  let minSizeStyle = "";
  let maxSizeStyle = "";

  defaultSize.forEach((size: number) => {
    defaultStyle += `calc(100vw/${defaultScreenSize}*${size})`;
    minSizeStyle += `calc(${minScreenSize}px/${defaultScreenSize}*${size})`;
    maxSizeStyle += `calc(${maxScreenSize}px/${defaultScreenSize}*${size})`;
  });

  return `
        ${property}:${defaultStyle};

        @media(max-width: ${minScreenSize}px){
            ${property}:${minSizeStyle};
        }

        @media(min-width: ${maxScreenSize}px){
            ${property}:${maxSizeStyle};
        }
    `;
}

export default getResponsiveSize;
