import { Accordion, AS, AH, AC } from "@/components";

const ACCORDION_CODE_EXAMPLE = `<Accordion 
  name="my-accordion" 
  color="green"  // Available: blue, gray, green, red, purple, amber
  enableMultiSectionOpen
>
  <AS id="section1">
    <AH>Section Header</AH>
    <AC>Section Content</AC>
  </AS>
</Accordion>`;

const LIBRARY_FEATURES = [
  {
    title: "Minimalist",
    description: "Only essential components",
    id: "minimalist"
  },
  {
    title: "Performance",
    description: "Lightweight & fast",
    id: "performance"
  },
  {
    title: "Customizable",
    description: "Extensive styling options",
    id: "customizable"
  },
  {
    title: "Developer DX",
    description: "Easy to use & integrate",
    id: "developer-dx"
  },
];

const COMPONENT_REFERENCES = [
  {
    component: "AS",
    description: "Accordion Section"
  },
  {
    component: "AH",
    description: "Accordion Header (clickable)"
  },
  {
    component: "AC",
    description: "Accordion Content (collapsible)"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-3xl md:text-8xl font-bold text-gray-900 dark:text-white mb-2">
              SP3-UI 
            </h1>
            <p className="text-md text-gray-900 dark:text-gray-100">
              StoryPoint3-UI • Save 3 Story Points
            </p>
          <div className="inline-flex items-center px-4 py-2 mt-2 text-sm text-green-700 bg-green-50 dark:bg-green-900/20 dark:text-green-400 rounded-full" role="status" aria-live="polite">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
            <span>System Running</span>
          </div>
        </div>
          
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8" aria-labelledby="value-prop">
            <h2 id="value-prop" className="sr-only">Value Proposition</h2>
            <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
              <span className="font-semibold">StoryPoint3-UI</span> feels like it saves developers <strong className="font-bold text-blue-600 dark:text-blue-300">3 story points</strong> of effort with minimalist, performance-first components.
            </p>
            <ul className="text-base text-gray-900 dark:text-gray-100 space-y-1">
              <li><span aria-hidden="true">✓</span> Designed for AI tools and copilots to understand</li>
              <li><span aria-hidden="true">✓</span> Simple for developers to implement and maintain</li>
              <li><span aria-hidden="true">✓</span> One way to do things, done right</li>
            </ul>
          </section>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8" aria-labelledby="accordion-demo">
          <h2 id="accordion-demo" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Accordion Component Demo
          </h2>

          <Accordion
            name="main-demo"
            enableMultiSectionOpen={false}
            defaultOpen={["getting-started"]}
            color="green"
          >
            <AS id="getting-started">
              <AH>Getting Started</AH>
              <AC>
                <p className="mb-2">
                  Welcome to SP3-UI! This minimalist design library focuses on:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Performance-first approach</li>
                  <li>Developer experience</li>
                  <li>Easy customization</li>
                  <li>Minimal bundle size</li>
                </ul>
              </AC>
            </AS>

            <AS id="installation">
              <AH>Installation</AH>
              <AC>
                <p className="mb-2">Install SP3-UI in your project:</p>
                <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                  npm install sp3-ui
                </code>
              </AC>
            </AS>

            <AS id="components">
              <AH>Available Components</AH>
              <AC>
                <p className="mb-2">Currently available components:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Accordion - ✅ Fast, customizable, accessible</li>
                  <li>Button - 🚧 Coming soon</li>
                  <li>Modal - 🚧 Coming soon</li>
                  <li>Input - 🚧 Coming soon</li>
                </ul>
              </AC>
            </AS>

            <AS id="usage">
              <AH>Usage Example</AH>
              <AC>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Component Reference:</p>
                    <dl className="text-sm space-y-1 text-gray-900 dark:text-gray-100">
                      {COMPONENT_REFERENCES.map(({ component, description }) => (
                        <div key={component} className="flex items-start gap-2">
                          <dt>
                            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
                              {component}
                            </code>
                          </dt>
                          <dd>= {description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Example Usage:</p>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto" role="img" aria-label="Code example showing accordion usage">
                      <code className="language-jsx font-mono" data-language="jsx">
                        {ACCORDION_CODE_EXAMPLE}
                      </code>
                    </pre>
                  </div>
                </div>
              </AC>
            </AS>

            <AS id="customization">
              <AH>Customization</AH>
              <AC>
                <p className="mb-2">
                  Every component supports extensive customization:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Color themes</strong> - Built-in color presets (blue, gray, green, red, purple, amber)</li>
                  <li><strong>className props</strong> - Override any styling</li>
                  <li><strong>Section styles</strong> - Each section can have custom styles</li>
                  <li><strong>Independent styling</strong> - Headers and content are independently stylable</li>
                  <li><strong>Data attributes</strong> - For easy debugging and testing</li>
                </ul>
              </AC>
            </AS>
          </Accordion>
        </section>

        <section className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8" aria-labelledby="color-variants">
          <h2 id="color-variants" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Color Variants Showcase
          </h2>
          <p className="text-gray-900 dark:text-gray-100 mb-6">
            The accordion component supports multiple color themes out of the box. 
            Try clicking on different accordions below to see the color variations:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Green Theme</h3>
              <Accordion name="green-demo" color="green">
                <AS id="green-1">
                  <AH>Eco-Friendly Design</AH>
                  <AC>Perfect for nature and sustainability themes</AC>
                </AS>
              </Accordion>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Purple Theme</h3>
              <Accordion name="purple-demo" color="purple">
                <AS id="purple-1">
                  <AH>Creative Solutions</AH>
                  <AC>Ideal for creative and innovative projects</AC>
                </AS>
              </Accordion>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Red Theme</h3>
              <Accordion name="red-demo" color="red">
                <AS id="red-1">
                  <AH>Important Notice</AH>
                  <AC>Great for alerts and critical information</AC>
                </AS>
              </Accordion>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amber Theme</h3>
              <Accordion name="amber-demo" color="amber">
                <AS id="amber-1">
                  <AH>Warning Message</AH>
                  <AC>Perfect for warnings and cautions</AC>
                </AS>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="features">
          <h2 id="features" className="sr-only">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIBRARY_FEATURES.map((feature) => (
              <article
                key={feature.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-900 dark:text-gray-100 text-sm">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
