create or replace view users as
select id, name, email, role from data.user;
alter view users owner to api; -- it is important to set the correct owner to the RLS policy kicks in
