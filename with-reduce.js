function toResponse(arr) 
  return arr.reduce(
    (acc, journee) => {
      acc.journeesSessions = [
        ...acc.journeesSessions,
        {
          id: journee.id,
          date: journee.date,
        },
      ]
      acc.sessions = [
        ...acc.sessions,
        ...journee.sessions.reduce((acc, session) => {
          const sessionCopy = toSession({
            ...session,
            journeeSessionId: journee.id,
          })
          acc = [...acc, sessionCopy]
          return acc
        }),
      ]
      acc.creneaux = [
        ...acc.creneaux,
        ...journee.sessions.reduce((acc, session) => {
          acc = [
            ...acc,
            ...session.creneaux.map(creneau =>
              toCreneau({
                ...creneau,
                sessionId: session.id,
              })
            ),
          ]
          return acc
        }),
      ]
      return acc
    },
    {
      journeesSessions,
      sessions,
      creneaux,
    }
  )
}
function toSession(session) {
  return {
    id: session.id,
    dateDebut: session.heureDebut,
    dateFin: session.heureFin,
    index: session.index,
    typeEpreuve: session.typeEpreuve,
    journeeSessionId: session.journeeSessionId,
  }
}
function toCreneau(creneau) {
  return {
    id: creneau.id,
    dateDebut: creneau.dateDebut,
    dateFin: creneau.dateFin,
    statut: creneau.statut,
    categoriePermis: creneau.categoriePermis,
    neph: creneau.neph,
    sessionId: creneau.sessionId,
  }
}
