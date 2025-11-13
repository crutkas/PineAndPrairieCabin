# Site Structure and Content Guide

## 📁 File Organization

```
PineAndPrairieCabin/
├── index.md                 # Home page with navigation
├── things-to-do.md         # Area activities and attractions
├── house-awareness.md      # House features and safety
├── contacts.md             # Emergency and service contacts
├── wifi-automation.md      # WiFi and smart home guide
├── checkout.md             # Departure procedures
├── tv-streaming.md         # Entertainment system guide
├── spa.md                  # Spa usage and maintenance
├── _config.yml             # Site configuration
├── Gemfile                 # Ruby dependencies
├── .gitignore              # Files to ignore in git
├── README.md               # Setup and usage instructions
└── assets/
    ├── css/
    │   └── style.scss      # Custom Scandinavian styling
    └── images/
        └── README.md       # Image specifications
```

## 🎨 Design Features

### Color Scheme (Scandinavian/Natural)
- **Primary Dark:** #2C3E50 (Deep forest/charcoal)
- **Primary Light:** #F8F9FA (Soft white) 
- **Accent Wood:** #8B7355 (Warm wood tone)
- **Accent Green:** #4A7C59 (Forest green)
- **Text Dark:** #333333
- **Text Light:** #666666

### Typography
- System font stack for optimal performance
- Clean, modern sans-serif
- Clear hierarchy with weighted headings

### Layout
- Maximum width: 900px
- Responsive breakpoints for mobile/tablet/desktop
- Card-style navigation on home page
- Generous whitespace and line spacing

## 📄 Page Content Structure

### Each Page Includes:
1. **Frontmatter** - Jekyll metadata (layout, title)
2. **Main heading** - Page title
3. **Introduction** - Overview of the topic
4. **Organized sections** - Clear subsections with H2/H3 headings
5. **Practical information** - Instructions, tips, and guidelines
6. **Placeholder content** - Marked with [brackets] for easy identification
7. **Back link** - Navigation to home page
8. **Image placeholders** - With descriptive alt text

## ✏️ Content Customization Priority

### High Priority (Essential Information)
1. **contacts.md** - Add all phone numbers and addresses
2. **wifi-automation.md** - WiFi password and smart home details
3. **checkout.md** - Specific checkout instructions
4. **house-awareness.md** - Safety information and layouts

### Medium Priority (Helpful Details)
5. **spa.md** - Operating instructions
6. **tv-streaming.md** - Remote and device setup
7. **things-to-do.md** - Restaurant and activity recommendations
8. **index.md** - Maximum occupancy and house rules

### When Ready
9. **Replace all images** - See assets/images/README.md
10. **Refine descriptions** - Add personality and specific details
11. **Add photos of features** - Show off your cabin!

## 🔍 Finding Placeholder Content

Search for these patterns to find content that needs updating:
- `[brackets]` - Specific information to fill in
- `[X]` - Numbers to specify
- `[Location]` - Physical locations to describe
- `[Phone number]` - Contact information
- `[To be added]` - Information to research/add
- `[If applicable]` - Conditional content

Example search: `grep -r "\[" *.md`

## 🚀 Publishing Workflow

1. **Edit** - Update markdown files with your content
2. **Add images** - Place photos in assets/images/
3. **Commit** - Save changes to git
4. **Push** - GitHub Pages auto-deploys to your domain

## 📱 Testing

### Before Publishing:
- [ ] All [placeholder] content filled in
- [ ] All images replaced with real photos
- [ ] Contact information verified
- [ ] WiFi credentials correct
- [ ] Links work between pages
- [ ] Test on mobile device
- [ ] Proofread for typos

### Local Preview:
```bash
bundle exec jekyll serve
# Visit http://localhost:4000
```

## 🔗 Navigation Structure

The site uses a simple, flat navigation:
```
Home (index.md)
├── Things to Do (things-to-do.md)
├── House Awareness (house-awareness.md)
├── Key Contacts (contacts.md)
├── WiFi & Automations (wifi-automation.md)
├── Checkout (checkout.md)
├── TV & Streaming (tv-streaming.md)
└── Spa (spa.md)
```

All pages link back to home for easy navigation.

## 💡 Tips for Content

### Writing Style:
- **Friendly and welcoming** - Guests should feel at home
- **Clear and concise** - Easy to scan and find information
- **Specific and actionable** - Provide exact steps and details
- **Safety-conscious** - Highlight important safety information

### Image Tips:
- Use high-quality photos (1200-2000px wide)
- Show mountain/forest views
- Capture golden hour lighting
- Keep spaces clean and uncluttered
- Consider professional photography

### Updating Regularly:
- Seasonal activities
- Restaurant recommendations
- Contact information
- WiFi passwords (if changed)
- House rules or procedures

---

**Ready to customize? Start with contacts.md and work your way through the priority list above!**
