# About Us Work Gallery Images

Place your work gallery images in this folder. Images are referenced in the About page (`client/pages/About.tsx`) in the `workGallery` array.

## Expected Images

Upload your team work photos and activities here. The folder structure is flexible - you can organize images by category or simply keep them flat in this directory.

## Usage

To add a new image to the "Our Work in Action" gallery, add an entry to the `workGallery` array in `client/pages/About.tsx` with the following format:

```typescript
{
  id: 9,
  title: "Your Work Title",
  description: "Description of the work or activity",
  location: "Location",
  category: "Category (e.g., Field Work, Technology, Training)",
  imageUrl: "/images/about/your-image-name.jpg"
}
```

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Keep images between 600x400px to 1200x800px for best display
- **Naming**: Use lowercase names with hyphens (e.g., `field-consultation-01.jpg`)
- **Quality**: Use compressed images to maintain fast loading times

## Example Images

Common work gallery images might include:
- field-work-01.jpg - Agronomists in the field
- team-consultation.jpg - Team consultation sessions
- training-session.jpg - Farmer training activities
- laboratory-testing.jpg - Product testing
- farm-visit.jpg - Farm visits and inspections
- product-application.jpg - Product application demonstrations
