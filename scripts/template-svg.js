// svgo template
// usage: npx @svgr/cli --typescript --icon --template template-svg.js path-to-svg.svg
function template({ template }, _opts, { jsx }) {
  const tmpl = template.smart({
    plugins: ['jsx', 'typescript'],
  });

  const fn = tmpl(
    `
    import { FC, SVGProps } from 'react'; 
    
    const Icon:  FC<SVGProps<SVGSVGElement>> = (props) => %%body%%;

    export default Icon;
    `,

    {
      plugins: ['jsx', 'typescript'],
    }
  );

  return fn({
    body: jsx,
  });
}

module.exports = template;
