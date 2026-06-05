$ErrorActionPreference = 'Stop'
$page = (Invoke-WebRequest -Uri 'http://localhost:4321/' -UseBasicParsing).Content

Write-Host "=== Pet policy + specs in DOM ==="
$checks = @(
  @{Label='Pets · Not permitted';         Pattern='Not permitted';                Expect='YES'},
  @{Label='Sleeps eleven heading';        Pattern='Sleeps eleven';                Expect='YES'},
  @{Label='Mother-in-Law suite present';  Pattern='Mother-in-Law';                Expect='YES'},
  @{Label='Sleeps 11 stats';              Pattern='Sleeps 11';                    Expect='YES'},
  @{Label='3.5 baths stats';              Pattern='>3\.5<';                       Expect='YES'},
  @{Label='2,469 sqft stats';             Pattern='>2,469<';                      Expect='YES'},
  @{Label='Game room callout';            Pattern='Pac-Man';                      Expect='YES'},
  @{Label='Pet-free amenity';             Pattern='pet-free';                     Expect='YES'},
  @{Label='No "Sleeps 8"';                Pattern='Sleeps 8';                     Expect='NO'},
  @{Label='No "Welcome ($75)"';           Pattern='Welcome \(\$75';               Expect='NO'},
  @{Label='No "Two twins, convertible"';  Pattern='Two twins, convertible';       Expect='NO'},
  @{Label='No "dog" in body';             Pattern='\bdog\b';                      Expect='NO'},
  @{Label='No "2,400 sq ft"';             Pattern='2,400';                        Expect='NO'},
  @{Label='No "2.5 bath"';                Pattern='2\.5\s*bath';                  Expect='NO'}
)
foreach ($c in $checks) {
  $found = if ($page -match $c.Pattern) { 'YES' } else { 'NO' }
  $ok = if ($found -eq $c.Expect) { 'PASS' } else { 'FAIL' }
  "  [{0}] {1,-32} -> {2}" -f $ok, $c.Label, $found
}

Write-Host "`n=== JSON-LD ==="
$m = [regex]::Match($page, '<script type="application/ld\+json">([\s\S]+?)</script>')
if ($m.Success) {
  $obj = $m.Groups[1].Value | ConvertFrom-Json
  "  numberOfBedrooms:        $($obj.numberOfBedrooms)"
  "  numberOfBathroomsTotal:  $($obj.numberOfBathroomsTotal)"
  "  occupancy.maxValue:      $($obj.occupancy.maxValue)"
  "  floorSize.value:         $($obj.floorSize.value) ($($obj.floorSize.unitCode))"
  "  petsAllowed:             $($obj.petsAllowed)"
} else { "  JSON-LD not found!" }

Write-Host "`n=== Guest house page ==="
$house = (Invoke-WebRequest -Uri 'http://localhost:4321/guest/house' -UseBasicParsing).Content
foreach ($p in @('Mother-in-Law','Heated Garage','Pac-Man','King','Queen')) {
  $f = if ($house -match $p) { 'YES' } else { 'NO ' }
  "  $f  $p"
}

Write-Host "`n=== Contacts page (no vet section) ==="
$contacts = (Invoke-WebRequest -Uri 'http://localhost:4321/guest/contacts' -UseBasicParsing).Content
$vet = if ($contacts -match 'Veterinary|pet emerg') { 'STILL PRESENT (bad)' } else { 'removed (good)' }
"  Veterinary section: $vet"

Write-Host "`n=== FAQ ==="
foreach ($p in @('pet-free home','Service animals','Sleeps 11','self-park')) {
  $f = if ($page -match $p) { 'YES' } else { 'NO ' }
  "  $f  $p"
}
