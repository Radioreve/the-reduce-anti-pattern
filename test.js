const toResponse = require('./without-reduce')
const { expect } = require('chai')

describe.only('Journées api', () => {

  const expectedRes = {
    'créneaux': [
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-18T08:00:00',
        'dateFin': '2019-11-18T09:00:00',
        'id': 'Créneau_01',
        'neph': null,
        'sessionId': 'SESSION_01',
        'statut': 'DISPONIBLE',
      },
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-18T09:00:00',
        'dateFin': '2019-11-18T10:00:00',
        'id': 'Créneau_02',
        'neph': null,
        'sessionId': 'SESSION_01',
        'statut': 'DISPONIBLE',
      },
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-18T08:00:00',
        'dateFin': '2019-11-18T09:00:00',
        'id': 'Créneau_07',
        'neph': null,
        'sessionId': 'SESSION_04',
        'statut': 'DISPONIBLE',
      },
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-18T09:00:00',
        'dateFin': '2019-11-18T10:00:00',
        'id': 'Créneau_08',
        'neph': null,
        'sessionId': 'SESSION_04',
        'statut': 'DISPONIBLE',
      },
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-19T08:00:00',
        'dateFin': '2019-11-19T09:00:00',
        'id': 'Créneau_03',
        'neph': null,
        'sessionId': 'SESSION_02',
        'statut': 'DISPONIBLE',
      },
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-19T09:00:00',
        'dateFin': '2019-11-19T10:00:00',
        'id': 'Créneau_04',
        'neph': null,
        'sessionId': 'SESSION_02',
        'statut': 'DISPONIBLE',
      },
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-25T08:00:00',
        'dateFin': '2019-11-25T09:00:00',
        'id': 'Créneau_05',
        'neph': null,
        'sessionId': 'SESSION_03',
        'statut': 'DISPONIBLE',
      },
      {
        'categoriePermis': 'B',
        'dateDebut': '2019-11-25T09:00:00',
        'dateFin': '2019-11-25T10:00:00',
        'id': 'Créneau_06',
        'neph': null,
        'sessionId': 'SESSION_03',
        'statut': 'DISPONIBLE',
      }
    ],
    'journéesSessions': [
      {
        'date': '2019-11-18T00:00:00',
        'id': 'journée_INSPECTEUR_01',
      },
      {
        'date': '2019-11-18T00:00:00',
        'id': 'journée_INSPECTEUR_04',
      },
      {
        'date': '2019-11-19T00:00:00',
        'id': 'journée_INSPECTEUR_02',
      },
      {
        'date': '2019-11-25T00:00:00',
        'id': 'journée_INSPECTEUR_03',
      },
    ],
    'sessions': [
      {
        'dateDebut': '2019-11-18T08:00:00',
        'dateFin': '2019-11-18T10:00:00',
        'id': 'SESSION_01',
        'index': 1,
        'journéeSessionId': 'journée_INSPECTEUR_01',
        'typeEpreuve': null,
      },
      {
        'dateDebut': '2019-11-18T08:00:00',
        'dateFin': '2019-11-18T10:00:00',
        'id': 'SESSION_04',
        'index': 1,
        'journéeSessionId': 'journée_INSPECTEUR_04',
        'typeEpreuve': null,
      },
      {
        'dateDebut': '2019-11-19T08:00:00',
        'dateFin': '2019-11-19T10:00:00',
        'id': 'SESSION_02',
        'index': 1,
        'journéeSessionId': 'journée_INSPECTEUR_02',
        'typeEpreuve': null,
      },
      {
        'dateDebut': '2019-11-25T08:00:00',
        'dateFin': '2019-11-25T10:00:00',
        'id': 'SESSION_03',
        'index': 1,
        'journéeSessionId': 'journée_INSPECTEUR_03',
        'typeEpreuve': null,
      }
    ]
  };

  it('should compute the right response', async () => {
    const res = toResponse([
      {
        id: 'journée_INSPECTEUR_01',
        date: '2019-11-18T00:00:00',
        sessions: [
          {
            id: 'SESSION_01',
            index: 1,
            date: '2019-11-18T00:00:00',
            categoriePermis: 'B',
            typeEpreuve: null,
            heureDebut: '2019-11-18T08:00:00',
            heureFin: '2019-11-18T10:00:00',
            centre: {
              id: 'CENTRE_01',
              nom: 'centre_01_nom',
              departement: '093'
            },
            créneaux: [
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_01',
                neph: null,
                dateDebut: '2019-11-18T08:00:00',
                dateFin: '2019-11-18T09:00:00',
                statut: 'DISPONIBLE'
              },
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_02',
                neph: null,
                dateDebut: '2019-11-18T09:00:00',
                dateFin: '2019-11-18T10:00:00',
                statut: 'DISPONIBLE'
              }
            ]
          }
        ],
        statut: 'PUBLIE'
      },
      {
        id: 'journée_INSPECTEUR_04',
        date: '2019-11-18T00:00:00',
        sessions: [
          {
            id: 'SESSION_04',
            index: 1,
            date: '2019-11-18T00:00:00',
            categoriePermis: 'B',
            typeEpreuve: null,
            heureDebut: '2019-11-18T08:00:00',
            heureFin: '2019-11-18T10:00:00',
            centre: {
              id: 'CENTRE_01',
              nom: 'centre_01_nom',
              departement: '093'
            },
            créneaux: [
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_07',
                neph: null,
                dateDebut: '2019-11-18T08:00:00',
                dateFin: '2019-11-18T09:00:00',
                statut: 'DISPONIBLE'
              },
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_08',
                neph: null,
                dateDebut: '2019-11-18T09:00:00',
                dateFin: '2019-11-18T10:00:00',
                statut: 'DISPONIBLE'
              }
            ]
          }
        ],
        statut: 'PUBLIE'
      },
      {
        id: 'journée_INSPECTEUR_02',
        date: '2019-11-19T00:00:00',
        sessions: [
          {
            id: 'SESSION_02',
            index: 1,
            date: '2019-11-19T00:00:00',
            categoriePermis: 'B',
            typeEpreuve: null,
            heureDebut: '2019-11-19T08:00:00',
            heureFin: '2019-11-19T10:00:00',
            centre: {
              id: 'CENTRE_01',
              nom: 'centre_01_nom',
              departement: '093'
            },
            créneaux: [
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_03',
                neph: null,
                dateDebut: '2019-11-19T08:00:00',
                dateFin: '2019-11-19T09:00:00',
                statut: 'DISPONIBLE'
              },
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_04',
                neph: null,
                dateDebut: '2019-11-19T09:00:00',
                dateFin: '2019-11-19T10:00:00',
                statut: 'DISPONIBLE'
              }
            ]
          }
        ],
        statut: 'PUBLIE'
      },
      {
        id: 'journée_INSPECTEUR_03',
        date: '2019-11-25T00:00:00',
        sessions: [
          {
            id: 'SESSION_03',
            index: 1,
            date: '2019-11-25T00:00:00',
            categoriePermis: 'B',
            typeEpreuve: null,
            heureDebut: '2019-11-25T08:00:00',
            heureFin: '2019-11-25T10:00:00',
            centre: {
              id: 'CENTRE_01',
              nom: 'centre_01_nom',
              departement: '093'
            },
            créneaux: [
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_05',
                neph: null,
                dateDebut: '2019-11-25T08:00:00',
                dateFin: '2019-11-25T09:00:00',
                statut: 'DISPONIBLE'
              },
              {
                categoriePermis: 'B',
                typeEpreuve: null,
                centreId: null,
                id: 'Créneau_06',
                neph: null,
                dateDebut: '2019-11-25T09:00:00',
                dateFin: '2019-11-25T10:00:00',
                statut: 'DISPONIBLE'
              }
            ]
          }
        ],
        statut: 'PUBLIE'
      }
    ]);

    expect(expectedRes).to.deep.equal(res);
  });

});
