#!/bin/zsh
# Reliable curl mirror. The Joomla host cuts urllib transfers.
set -u
ROOT="/Users/youming/Github/_huaming-en-wip"
RAW="$ROOT/mirror/raw/www.intl-huaming.com"
DL="$ROOT/public/downloads"
IMG="$ROOT/public/images/products"
LOG="$ROOT/mirror/curl-mirror.log"
mkdir -p "$RAW" "$DL" "$IMG" "$ROOT/mirror/pages"

UA="HuamingStaffMirror/1.0 (eric.tan@huaming.com; official-site rebuild)"
BASE="https://www.intl-huaming.com"

fetch() {
  local url="$1" dest="$2"
  mkdir -p "$(dirname "$dest")"
  echo "GET $url -> $dest" | tee -a "$LOG"
  curl -sL --retry 5 --retry-delay 2 --retry-all-errors -C - \
    --max-time 120 -A "$UA" "$url" -o "$dest" \
    -w "%{http_code} %{size_download} %{url_effective}\n" | tee -a "$LOG"
  sleep 0.25
}

# --- product + category pages ---
pages=(
  /products-page
  /products-page-for-categories-listing
  /products-page-for-categories-listing/category/12-on-load-tap-changer
  /products-page-for-categories-listing/category/13-de-energized-tap-changers
  /products-page-for-categories-listing/category/14-accessories
  /products-page-for-categories-listing/category/17-non-vacuum-type
  /products-page-for-categories-listing/category/18-vacuum-type
  /products-page-for-categories-listing/category/19-gas-insulated-type
  /products-page-for-categories-listing/category/20-dry-type
  /products-page-for-categories-listing/category/21-cage-type
  /products-page-for-categories-listing/category/22-drum-type
  /products-page-for-categories-listing/category/23-motor-drive-unit
  /products-page-for-categories-listing/category/24-controller
  /products-page-for-categories-listing/category/25-online-oil-filter
  /products-page-for-categories-listing/category/26-linear-type
  /products-page-for-categories-listing/category/27-monitoring
  /products-page-for-categories-listing/category/28-regulator
  /products-page/product/1-cm
  /products-page/product/14-cmd
  /products-page/product/15-cv
  /products-page/product/4-cv2
  /products-page/product/16-cm2
  /products-page/product/17-shzv
  /products-page/product/33-shzvg
  /products-page/product/18-chvt
  /products-page/product/19-hwv
  /products-page/product/20-hwdk
  /products-page/product/5-cvt
  /products-page/product/21-cz
  /products-page/product/22-hmdk
  /products-page/product/7-w_l
  /products-page/product/6-w_g
  /products-page/product/8-zwc
  /products-page/product/11-shm-d
  /products-page/product/9-cma7
  /products-page/product/13-shm-x
  /products-page/product/34-shm-kx
  /products-page/product/27-hmjk-ii
  /products-page/product/28-zxjy
  /products-page/product/29-shgv
  /products-page/product/24-hmiet
  /products-page/product/25-et-sz6
  /products-page/product/26-hmc-3c
  /about/introduction
  /about/history
  /about/why-us
  /tap-changer
  /newsroom
  /career
  /contact-us
  /investor-relations
  /renewable-energy/general-introduction
  /renewable-energy/project-references
  /component/content/article/huaming-chvt-converter-transformer-on-load-tap-changer-has-successfully-commissioned-at-longdong-800kv-hvdc-converter-station-in-china?catid=19&Itemid=228
  /component/content/article/huaming-power-equipment-opens-international-headquarters-in-singapore-to-leverage-opportunities-in-the-energy-transition-2?catid=19&Itemid=228
  /component/content/article/not-familiar-with-tap-changers-this-comic-will-make-it-easy-to-understand-5?catid=19&Itemid=228
  /component/content/article/shanghai-huaming-twenty-years-of-deep-engagement-in-indonesia-building-a-trusted-brand-for-customers?catid=19&Itemid=228
  /component/content/article/course-on-load-tap-changers-oltc-free-basic-level---brought-to-you-by-transformer-magazine-and-huaming?catid=19&Itemid=228
  /component/content/article/huaming-technical-seminar-successfully-held-in-nigeria-for-tcn?catid=19&Itemid=228
  /component/content/article/milestone-achievement?catid=19&Itemid=228
  /component/content/article/huaming-technical-seminar-on-tap-changer-successfully-held-in-pakistan?catid=19&Itemid=228
  /component/content/article/huaming-awarded-distinguished-municipal-level-enterprise-technology-center?catid=19&Itemid=228
  /component/content/article/huaming-in-action?catid=19&Itemid=228
  /component/content/article/huaming-power-awarded-outstanding-supplier-of-2023?catid=19&Itemid=228
)

for path in "${pages[@]}"; do
  safe=$(echo "$path" | sed 's#^/##; s#[/?&=]#-#g')
  fetch "$BASE$path" "$ROOT/mirror/pages/${safe}.html"
done

# --- known live PDFs ---
fetch "$BASE/images/00_HuaMing/product/Retrofit%20Leaflet%20En.pdf" "$DL/Retrofit-Leaflet-En.pdf"
fetch "$BASE/images/00_HuaMing/product/PDF/Vacuum%20Type/CV2/CV2%20Leaflet-2024.pdf" "$DL/CV2-Leaflet-2024.pdf"
fetch "$BASE/images/00_HuaMing/product/PDF/Vacuum%20Type/CV2/OLTC-CV2-OI-HM0.460.5601-2026.pdf" "$DL/OLTC-CV2-OI-HM0.460.5601-2026.pdf"
fetch "$BASE/images/00_HuaMing/product/PDF/Vacuum%20Type/CM2/CM2%20Operating%20Instruction_2021.10.13.pdf" "$DL/CM2-Operating-Instruction_2021.10.13.pdf"
fetch "$BASE/images/00_HuaMing/product/PDF/Vacuum%20Type/CM2/CM2%20Vacuum%20OLTC%20Technical%20Data-HM0%20154%205701.pdf" "$DL/CM2-Vacuum-OLTC-Technical-Data-HM0-154-5701-live.pdf"
fetch "$BASE/images/00_HuaMing/product/PDF/Vacuum%20Type/SHZV/OLTC-SHZV-OI-HMO.460.3901-EN.pdf" "$DL/OLTC-SHZV-OI-HMO.460.3901-EN.pdf"

# --- product photos ---
imgs=(
  "Product/CV2-2.png"
  "Product/CM2.png"
  "Product/CHVt.png"
  "Product/CVT.png"
  "Product/CZ.png"
  "Product/HMDK.png"
  "Product/HWDK.png"
  "Product/HWV.png"
  "Product/Huaming%20CV%20OLTC.png"
  "Product/SHGV.png"
  "Product/SHZVG.png"
  "Product/hmjk-ii-2.png"
  "Product/zwc-2.png"
)
for rel in "${imgs[@]}"; do
  name=$(basename "$rel" | sed 's/%20/-/g')
  fetch "$BASE/images/00_HuaMing/product/$rel" "$IMG/$name"
done

echo DONE | tee -a "$LOG"
