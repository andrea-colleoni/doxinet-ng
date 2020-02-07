package it.doxinet.doxy;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import it.doxinet.doxy.model.Persona;

@RepositoryRestResource(collectionResourceRel = "persone", path = "persone")
public interface PersonaRepository extends PagingAndSortingRepository<Persona, Integer> {
}
