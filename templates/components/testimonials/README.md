# Testimonial Section Component

A flexible testimonial section component for displaying customer reviews and testimonials.

## Usage

### Method 1: Using Individual Testimonial Cards

```handlebars
<section class="testimonialSection">
    <div class="container">
        <div class="testimonialSection-header">
            <h2 class="testimonialSection-title">What Our Customers Say</h2>
            <p class="testimonialSection-subtitle">Read reviews from our satisfied customers</p>
        </div>
        
        <div class="testimonialGrid testimonialGrid--3">
            <div class="testimonialGrid-item">
                {{> components/testimonials/testimonial-card 
                    testimonial=(object 
                        name="Sarah Johnson"
                        text="Amazing product! The quality exceeded my expectations."
                        rating=5
                        location="Chicago, IL"
                        product="Premium Widget Pro"
                    )
                }}
            </div>
            <!-- Add more testimonial cards as needed -->
        </div>
    </div>
</section>
```

### Method 2: Using with Data from Page Context

```handlebars
{{> components/testimonials/testimonial-section
    title="What Our Customers Say"
    subtitle="Read reviews from our satisfied customers"
    testimonials=testimonials
    display_count=3
}}
```

**Note:** The `testimonials` variable must be passed from your page template or backend.

### With Carousel Layout

```handlebars
{{> components/testimonials/testimonial-section
    title="Customer Reviews"
    subtitle="Hear from our happy customers"
    testimonials=testimonials
    display_count=5
    layout="carousel"
    theme="light"
}}
```

### With Custom Theme

```handlebars
{{> components/testimonials/testimonial-section
    title="Testimonials"
    testimonials=testimonials
    display_count=4
    theme="dark"
}}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | String | - | Main heading for the testimonial section |
| `subtitle` | String | - | Optional subtitle/description text |
| `testimonials` | Array | - | Array of testimonial objects |
| `display_count` | Number | 3 | Number of testimonials to display |
| `layout` | String | "grid" | Layout style: "grid" or "carousel" |
| `theme` | String | "default" | Color theme: "default", "light", or "dark" |

## Testimonial Object Structure

Each testimonial object should contain:

```javascript
{
    name: "Customer Name",           // Required
    text: "Testimonial text...",     // Required
    rating: 5,                       // Optional: 1-5 stars
    location: "City, State",         // Optional
    image: "path/to/avatar.jpg",     // Optional: Customer photo
    product: "Product Name",         // Optional: Verified purchase
    date: "2024-01-15"              // Optional: Testimonial date
}
```

## Layout Options

### Grid Layout (Default)
- Displays testimonials in a responsive grid
- Supports 1-4 columns based on `display_count`
- Automatically adjusts for mobile devices

### Carousel Layout
- Displays testimonials in a carousel/slider
- Includes navigation arrows
- Good for displaying many testimonials

## Theme Options

### Default Theme
- Uses theme's default colors
- Clean, professional appearance

### Light Theme
- Light background with white cards
- Subtle borders
- Good for light page backgrounds

### Dark Theme
- Dark background with dark cards
- Light text
- Good for dark page backgrounds

## Responsive Behavior

- **Desktop**: Full grid layout (up to 4 columns)
- **Tablet**: Reduced to 2-3 columns
- **Mobile**: Single column layout
- **Small screens**: Adjusted padding and font sizes

## Accessibility Features

- Proper semantic HTML structure
- ARIA labels for carousel navigation
- Screen reader friendly star ratings
- Keyboard navigation support
- High contrast color support

## Customization

The component uses Stencil's color system, so it will automatically adapt to your theme's color settings. You can also customize the appearance by modifying the SCSS variables in the component file.

## Data Sources

### Using Product Reviews
If you have product reviews available, you can use them directly:

```handlebars
{{#if product.reviews}}
    {{> components/testimonials/testimonial-section
        title="Product Reviews"
        testimonials=product.reviews
        display_count=3
    }}
{{/if}}
```

### Using JavaScript Injection
For dynamic data, use the `{{inject}}` helper:

```handlebars
{{inject "testimonialData" (array 
    (object 
        name="Customer Name"
        text="Testimonial text..."
        rating=5
        location="City, State"
    )
)}}

<script>
const testimonialData = JSON.parse({{jsContext}}).testimonialData;
// Use testimonialData to populate your component
</script>
```

### Using Individual Cards
For static testimonials, use individual cards:

```handlebars
{{> components/testimonials/testimonial-card 
    testimonial=(object 
        name="Customer Name"
        text="Testimonial text..."
        rating=5
        location="City, State"
        product="Product Name"
    )
}}
```

## Example Data Structure

Each testimonial object should contain:

```javascript
{
    name: "Customer Name",           // Required
    text: "Testimonial text...",     // Required
    rating: 5,                       // Optional: 1-5 stars
    location: "City, State",         // Optional
    image: "path/to/avatar.jpg",     // Optional: Customer photo
    product: "Product Name",         // Optional: Verified purchase
    date: "2024-01-15"              // Optional: Testimonial date
}
```
