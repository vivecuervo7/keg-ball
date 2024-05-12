export interface User {
  id: string
  username: string
  email: string
  imageUrl: string
}

export interface Club {
  id: string
  name: string
  code: string
  ownerId: string
  players: Player[]
  members: Member[]
}

export interface Member {
  userId: string
  clubId: string
  role: 'owner' | 'admin' | 'member'
}

export interface Player {
  id: string
  name: string
}
