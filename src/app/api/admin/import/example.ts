import * as XLSX from 'xlsx'

// Créer un tableau de données d'exemple
const data = [
  { passportNumber: 'P123456' },
  { passportNumber: 'P234567' },
  { passportNumber: 'P345678' },
  { passportNumber: 'P456789' },
  { passportNumber: 'P567890' },
]

// Créer un nouveau classeur
const workbook = XLSX.utils.book_new()

// Créer une feuille de calcul avec les données
const worksheet = XLSX.utils.json_to_sheet(data)

// Ajouter la feuille au classeur
XLSX.utils.book_append_sheet(workbook, worksheet, 'Passeports')

// Écrire le fichier
XLSX.writeFile(workbook, 'exemple_import_passeports.xlsx') 