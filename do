# ACTIVATE PROJECT
if [ -n "$VIRTUAL_ENV" ]; then
    echo "Virtual environment is active"
else
    source x_venv/bin/activate
fi


# KILL PREVIOUSLY ACTIVATED SERVER IF STILL ACTIVE

# Count the number of open connections on port 8000
count=$(lsof -ti :8000 | wc -l)

# Check if there are open connections
if [ "$count" -gt 0 ]; then
lsof -ti :8000 | xargs kill
echo "Processes using port 8000 killed."
fi

# CORE TASKS

if [ $# -eq 0 ]; then
    # Start server
    echo "Wakarimashita, Goshujisama!"
    if [ -n "$2" ]; then
    python3 x_proj/manage.py runserver $2
    echo "Started server at $2"
    else
    python3 x_proj/manage.py runserver
    fi

    python3 x_proj/manage.py runserver #&
    #sleep 4
    # second task


elif [ "$1" = "migrations" ]; then
    echo "Preparing for $1"
    python3 x_proj/manage.py makemigrations $2
    python3 x_proj/manage.py migrate


elif [ "$1" = "sh" ]; then
    echo "Let's go bashy bashy"
    python3 x_proj/manage.py shell


else
    echo "More than one argument passed. Only $1 will be considered"
fi







# Some usefull shell automations I've used
# for dir in *; do mkdir -p $dir/templates/$dir && touch $dir/templates/$dir/file.html; done
# for dir in *; do cp ../urls.py $dir; done
