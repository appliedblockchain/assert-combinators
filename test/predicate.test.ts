import $ from '../'

const user =
  $.object({ name: $.string, role: $.string })

const roleExists =
  (root: any) =>
    $.predicate((_: any) => root.roles.includes(_.role), 'role exists')

const message =
  (root: any) =>
    $.object({
      roles: $.array($.string),
      users: $.array($.and(user, roleExists(root)))
    })(root)

test('valid', () => {
  expect(() => message({
    roles: [ 'admin' ],
    users: [ { name: 'Anna', role: 'admin' } ]
  })).not.toThrow()
})

test('invalid, role doesn\'t exist', () => {
  expect(() => message({
    roles: [ 'admin' ],
    users: [ { name: 'Anna', role: 'ADMIN' } ]
  })).toThrow('[users] [0] Expected \'role exists\' predicate to pass for { name: \'Anna\', role: \'ADMIN\' }.')
})
