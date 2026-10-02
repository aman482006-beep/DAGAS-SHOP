import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/images/categories', exist_ok=True)
os.makedirs('public/images/products', exist_ok=True)
os.makedirs('public/images/hero', exist_ok=True)

# Brand colors
GOLD = (143, 97, 22)
DARK = (17, 24, 39)
MUTED = (107, 114, 128)
LIGHT_GOLD = (246, 239, 226)

def create_card_image(filename, title, subtitle, sku, category_name, bg_color, accent_color, icon_type="apparel"):
    # 800 x 1000 (4:5 ratio)
    width, height = 800, 1000
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Subtle geometric grid pattern or soft border
    draw.rectangle([20, 20, width - 20, height - 20], outline=(230, 225, 215), width=2)
    draw.rectangle([30, 30, width - 30, height - 30], outline=(245, 240, 230), width=1)
    
    # DAGAS showroom header badge
    draw.rectangle([50, 50, 320, 95], fill=(255, 255, 255), outline=(220, 210, 195), width=1)
    draw.rectangle([55, 55, 110, 90], fill=GOLD)
    # White DAGAS text
    draw.text((62, 65), "DAGAS", fill=(255, 255, 255))
    draw.text((120, 65), f"WHOLESALE {sku}", fill=DARK)
    
    # Center showroom apparel visual frame
    frame_box = [80, 140, width - 80, height - 260]
    draw.rounded_rectangle(frame_box, radius=24, fill=(255, 255, 255), outline=(225, 218, 205), width=2)
    
    # Inner decorative backdrop
    inner_box = [110, 170, width - 110, height - 290]
    draw.rounded_rectangle(inner_box, radius=18, fill=accent_color)
    
    # Stylized clothing hanger & silhouette
    hanger_x, hanger_y = width // 2, 220
    draw.line([(hanger_x - 140, hanger_y + 60), (hanger_x, hanger_y), (hanger_x + 140, hanger_y + 60)], fill=GOLD, width=6)
    draw.arc([hanger_x - 20, hanger_y - 35, hanger_x + 20, hanger_y + 5], start=180, end=360, fill=GOLD, width=6)
    
    # Center garment badge / card representation
    draw.rounded_rectangle([hanger_x - 130, hanger_y + 70, hanger_x + 130, height - 360], radius=16, fill=(255, 255, 255, 220), outline=(210, 200, 185), width=2)
    
    # Text inside garment graphic
    draw.text((hanger_x - 90, hanger_y + 110), "DAGAS SHOP", fill=GOLD)
    draw.text((hanger_x - 90, hanger_y + 145), category_name.upper(), fill=DARK)
    draw.text((hanger_x - 90, hanger_y + 175), "B2B SHOWROOM SAMPLE", fill=MUTED)
    draw.text((hanger_x - 90, hanger_y + 210), f"Price Tier: Rs. 300 - 600", fill=GOLD)
    draw.text((hanger_x - 90, hanger_y + 235), "Flexible Wholesale Quantities", fill=DARK)
    
    # Fabric weave or decorative dashes
    for y in range(hanger_y + 280, height - 380, 20):
        draw.line([(hanger_x - 110, y), (hanger_x + 110, y)], fill=(240, 235, 225), width=2)
        
    # Bottom info container
    info_y = height - 220
    draw.text((60, info_y), title[:36], fill=DARK)
    draw.text((60, info_y + 35), subtitle[:45], fill=MUTED)
    
    # Bottom tag pills
    draw.rounded_rectangle([60, info_y + 80, 230, info_y + 115], radius=8, fill=LIGHT_GOLD)
    draw.text((75, info_y + 90), "WHOLESALE DIRECT", fill=GOLD)
    
    draw.rounded_rectangle([245, info_y + 80, 430, info_y + 115], radius=8, fill=(240, 242, 245))
    draw.text((260, info_y + 90), "BENGALURU STOCK", fill=(55, 65, 81))
    
    # Right watermark
    draw.text((width - 240, info_y + 90), "[Genuine DAGAS Catalog]", fill=(160, 160, 160))
    
    img.save(filename, quality=92)
    print(f"Generated {filename}")

# Generate Category Images
categories = [
    ("girlswear.jpg", "Girls Collection", "Frocks, Sets, Casual & Party Wear", "CAT-GW", "Girlswear", (254, 250, 247), (252, 236, 234)),
    ("boyswear.jpg", "Boys Collection", "Shirts, Tees, Denim & Co-ords", "CAT-BW", "Boyswear", (248, 251, 254), (230, 242, 252)),
    ("babywear.jpg", "Infants & Babywear", "Rompers, Soft Cotton Sets & Onesies", "CAT-INF", "Babywear", (254, 252, 245), (254, 247, 227)),
    ("dresses-frocks.jpg", "Dresses & Frocks", "Everyday Florals to Premium Party Frocks", "CAT-DF", "Dresses & Frocks", (254, 249, 252), (250, 232, 245)),
    ("ethnic-wear.jpg", "Ethnic & Festive", "Kurta Sets, Lehengas & Festive Outfits", "CAT-EW", "Ethnic Wear", (254, 251, 246), (253, 240, 223)),
    ("sets-coords.jpg", "Sets & Co-ords", "Matching Top & Bottom Wholesale Bundles", "CAT-SC", "Sets & Co-ords", (249, 252, 249), (232, 247, 235)),
    ("nightwear.jpg", "Nightwear & Loungewear", "100% Cotton Pajama & Sleepwear Sets", "CAT-NW", "Nightwear", (250, 250, 254), (238, 238, 252)),
    ("partywear.jpg", "Party & Occasion Wear", "Gowns, Tuxedo Sets & Statement Styles", "CAT-PW", "Partywear", (254, 250, 248), (251, 237, 227)),
]

for filename, title, subtitle, sku, cat, bg, accent in categories:
    create_card_image(os.path.join('public/images/categories', filename), title, subtitle, sku, cat, bg, accent)

# Generate Product Images
products = [
    ("dg-001.jpg", "Cotton Floral Summer Frock", "Breathable pure cotton with bow detailing", "DG-001", "Girlswear", (254, 250, 247), (253, 238, 236)),
    ("dg-002.jpg", "Boys Casual Polo & Shorts Set", "Combed cotton pique knit with cargo shorts", "DG-002", "Boyswear", (248, 251, 254), (232, 243, 253)),
    ("dg-003.jpg", "Infant Soft Ribbed Romper Pack", "Ultra-soft combed baby cotton with snap buttons", "DG-003", "Babywear", (254, 252, 245), (254, 247, 227)),
    ("dg-004.jpg", "Girls Tiered Tulle Party Gown", "Layered net with satin lining & sequin yoke", "DG-004", "Partywear", (254, 249, 252), (251, 234, 247)),
    ("dg-005.jpg", "Boys Festive Kurta Pyjama Set", "Art silk blend with mandarin collar & foil print", "DG-005", "Ethnic Wear", (254, 251, 246), (253, 240, 223)),
    ("dg-006.jpg", "Unisex Dino Print Loungewear Set", "Bio-washed interlock cotton night suit", "DG-006", "Nightwear", (250, 250, 254), (239, 239, 253)),
    ("dg-007.jpg", "Girls Denim Dungaree & Striped Tee", "Stretch washed denim with yarn-dyed jersey", "DG-007", "Sets & Co-ords", (249, 252, 250), (233, 248, 237)),
    ("dg-008.jpg", "Boys Checked Casual Shirt", "100% Cotton twill weave rolled sleeve shirt", "DG-008", "Boyswear", (248, 251, 254), (232, 243, 253)),
    ("dg-009.jpg", "Girls Pastel Chiffon Frock", "Soft pleated flared frock with cotton under-layer", "DG-009", "Dresses & Frocks", (254, 250, 247), (253, 238, 236)),
    ("dg-010.jpg", "Infant Printed Bodysuit Assortment", "Hypoallergenic skin-friendly baby onesies", "DG-010", "Babywear", (254, 252, 245), (254, 247, 227)),
    ("dg-011.jpg", "Boys 3-Piece Waistcoat Suit", "Formal waistcoat, trousers and collared shirt", "DG-011", "Partywear", (248, 251, 254), (230, 240, 250)),
    ("dg-012.jpg", "Girls Festive Lehenga Choli Set", "Brocade choli with flared georgette skirt", "DG-012", "Ethnic Wear", (254, 251, 246), (253, 240, 223)),
]

for filename, title, subtitle, sku, cat, bg, accent in products:
    create_card_image(os.path.join('public/images/products', filename), title, subtitle, sku, cat, bg, accent)

# Generate Hero Banner Image (1920 x 800)
hero_img = Image.new('RGB', (1920, 800), (250, 247, 240))
hdraw = ImageDraw.Draw(hero_img)
# Subtle aesthetic linear gradients & watermark branding
for x in range(0, 1920, 60):
    hdraw.line([(x, 0), (x + 300, 800)], fill=(245, 240, 230), width=1)
# Brand ribbon
hdraw.rectangle([0, 0, 1920, 10], fill=GOLD)
# Ambient circles
hdraw.ellipse([1400, -100, 1900, 400], fill=(244, 236, 220, 100))
hdraw.ellipse([1200, 400, 1700, 900], fill=(247, 242, 232, 100))
hero_img.save('public/images/hero/hero-banner.jpg', quality=95)
print("Hero banner generated!")
