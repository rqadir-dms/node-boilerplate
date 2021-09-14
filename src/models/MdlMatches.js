function MdlMatches() {
  return {
      create: 'INSERT INTO matches (week, home_team, away_team, stadium, code) VALUES (${match_week}, ${home_team}, ${away_team}, ${stadium}, ${code}) RETURNING id',
      read: 'SELECT week, home_team, away_team, stadium, code FROM matches WHERE week=${match_week}',
      update: 'UPDATE matches SET ${updateColsStr} WHERE code=${code} RETURNING id',
      erase: 'DELETE FROM matches WHERE code=${code} RETURNING id',
      exists: 'SELECT COUNT(id) AS exists FROM matches WHERE id=${id}',
  }
}

module.exports = MdlMatches
