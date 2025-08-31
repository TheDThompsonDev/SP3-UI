# SP3-UI

**StoryPoint3-UI • Save 3 Story Points**

🟢 System Running

---

**StoryPoint3-UI** feels like it saves developers **3 story points** of effort with minimalist, performance-first components.

✓ Designed for AI tools and copilots to understand  
✓ Simple for developers to implement and maintain  
✓ One way to do things, done right

---

## Accordion Component Demo

<details>
<summary><strong>Getting Started</strong></summary>

Welcome to SP3-UI! This minimalist design library focuses on:

• **Performance-first approach**  
• **Developer experience**  
• **Easy customization**  
• **Minimal bundle size**

</details>

<details>
<summary><strong>Installation</strong></summary>

```
coming soon
```

Import the components you need:

```tsx
import { Accordion, AS, AH, AC } from 'sp3-ui';
```

</details>

<details>
<summary><strong>Available Components</strong></summary>

### Current Components

- **Accordion** - Collapsible content sections with customizable themes
- More components coming soon...

### Component Features

- TypeScript support out of the box
- Tailwind CSS integration
- Dark mode support
- Accessibility compliant
- Customizable color themes

</details>

<details>
<summary><strong>Usage Example</strong></summary>

```tsx
import { Accordion, AS, AH, AC } from 'sp3-ui';

function MyApp() {
  return (
    <Accordion name="demo" color="blue">
      <AS id="section1">
        <AH>Getting Started</AH>
        <AC>
          <p>This is the content for section 1</p>
        </AC>
      </AS>
      
      <AS id="section2">
        <AH>Advanced Usage</AH>
        <AC>
          <p>This is the content for section 2</p>
        </AC>
      </AS>
    </Accordion>
  );
}
```

### Component Reference
- `Accordion` = Main accordion container
- `AS` = Accordion Section (individual collapsible section)
- `AH` = Accordion Header (clickable trigger)
- `AC` = Accordion Content (collapsible content area)

</details>

<details>
<summary><strong>Customization</strong></summary>

### Color Themes

The accordion component supports multiple color options:

**Predefined Colors:**
- `blue` (default)
- `red`
- `green`  
- `purple`
- `amber`
- `gray`

**Custom Colors:**
- Any hex color code (e.g., `#456456`)

### Props

#### Accordion Props
- `name: string` - Unique identifier for the accordion
- `color?: string` - Color theme or hex code
- `enableMultiSectionOpen?: boolean` - Allow multiple sections open
- `defaultOpen?: string[]` - Array of section IDs to open by default
- `className?: string` - Additional CSS classes

#### AS (Accordion Section) Props
- `id: string` - Unique identifier for the section
- `defaultOpen?: boolean` - Whether section starts open
- `className?: string` - Additional CSS classes

#### AH (Accordion Header) Props
- `children: ReactNode` - Header content
- `className?: string` - Additional CSS classes

#### AC (Accordion Content) Props
- `children: ReactNode` - Content to display when expanded
- `className?: string` - Additional CSS classes

</details>

---

## Color Variants Showcase

The accordion component supports multiple color themes out of the box. Try clicking on different accordions below to see the color variations:

### Green Theme
<details>
<summary><strong>Eco-Friendly Design</strong></summary>

Perfect for environmental, sustainability, or nature-focused applications. The green theme provides a calm, organic feeling.

```tsx
<Accordion color="green" name="eco-demo">
  <AS id="eco-tips">
    <AH>Environmental Tips</AH>
    <AC>Content here...</AC>
  </AS>
</Accordion>
```

</details>

### Purple Theme
<details>
<summary><strong>Creative Solutions</strong></summary>

Great for creative, artistic, or premium applications. Purple conveys creativity, luxury, and innovation.

```tsx
<Accordion color="purple" name="creative-demo">
  <AS id="design-tips">
    <AH>Design Guidelines</AH>
    <AC>Content here...</AC>
  </AS>
</Accordion>
```

</details>

### Red Theme
<details>
<summary><strong>Important Notice</strong></summary>

Ideal for urgent information, warnings, or critical system messages. Red draws immediate attention.

```tsx
<Accordion color="red" name="alert-demo">
  <AS id="urgent">
    <AH>System Alert</AH>
    <AC>Content here...</AC>
  </AS>
</Accordion>
```

</details>

### Amber Theme
<details>
<summary><strong>Warning Message</strong></summary>

Perfect for cautionary information, tips, or moderate alerts. Amber provides a balanced warning tone.

```tsx
<Accordion color="amber" name="warning-demo">
  <AS id="caution">
    <AH>Important Information</AH>
    <AC>Content here...</AC>
  </AS>
</Accordion>
```

</details>

### Custom Colors
<details>
<summary><strong>Brand Colors</strong></summary>

Use your own brand colors with hex codes:

```tsx
<Accordion color="#456456" name="brand-demo">
  <AS id="brand">
    <AH>Brand Guidelines</AH>
    <AC>Content here...</AC>
  </AS>
</Accordion>
```

</details>

---

## Development

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/sp3-ui.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Support

- 📧 Email: support@sp3-ui.dev
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/sp3-ui/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/sp3-ui/discussions)

---

<div align="center">
  <strong>Built with ❤️ for developers who value simplicity and performance</strong>
</div>
