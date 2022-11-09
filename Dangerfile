# Sometimes it's a README fix, or something like that - which isn't relevant for
# including in a project's CHANGELOG for example

# Make it more obvious that a PR is a work in progress and shouldn't be merged yet

# Warn when there is a big PR
warn("Big PR") if git.lines_of_code > 0
message "Welcome, Danger."

# Don't let testing shortcuts get into master by accident
fail("fdescribe left in tests") if `grep -r fdescribe specs/ `.length > 1
fail("fit left in tests") if `grep -r fit specs/ `.length > 1