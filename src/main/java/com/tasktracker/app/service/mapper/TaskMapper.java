package com.tasktracker.app.service.mapper;

import com.tasktracker.app.domain.Task;
import com.tasktracker.app.domain.User;
import com.tasktracker.app.service.dto.TaskDTO;
import com.tasktracker.app.service.dto.UserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Task} and its DTO {@link TaskDTO}.
 */
@Mapper(componentModel = "spring")
public interface TaskMapper extends EntityMapper<TaskDTO, Task> {
    @Mapping(target = "user", source = "user", qualifiedByName = "userLogin")
    TaskDTO toDto(Task s);

    @Named("userLogin")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "login", source = "login")
    UserDTO toDtoUserLogin(User user);
}
